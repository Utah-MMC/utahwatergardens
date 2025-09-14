# Grid Layout Fixing Scripts

This directory contains scripts to automatically detect and fix grid layout issues that cause dead space on desktop devices.

## Scripts

### 1. `scan-grid-issues.js`
**Purpose**: Scans the entire codebase for potential grid layout issues.

**Usage**:
```bash
node scripts/scan-grid-issues.js
```

**What it does**:
- Scans all CSS files in `frontend/src/pages` and `frontend/src/components`
- Identifies grids using `auto-fit` or `auto-fill` that could create uneven rows
- Estimates the number of items in each grid by analyzing corresponding JS files
- Reports potential dead space issues and provides recommendations

### 2. `fix-grid-dead-space.js`
**Purpose**: Automatically fixes known grid layout issues.

**Usage**:
```bash
node scripts/fix-grid-dead-space.js
```

**What it does**:
- Applies fixes to known problematic grids
- Replaces `auto-fit`/`auto-fill` with fixed column counts
- Adds responsive breakpoints for tablet and mobile
- Provides detailed report of changes made

### 3. `fix-grid-layouts.js`
**Purpose**: Comprehensive grid layout fixer (advanced).

**Usage**:
```bash
node scripts/fix-grid-layouts.js
```

**What it does**:
- Automatically detects and fixes all grid layout issues
- Analyzes JS files to determine item counts
- Applies appropriate column counts based on item count
- Adds responsive breakpoints
- More intelligent but requires more dependencies

## Common Grid Layout Issues

### Problem: Dead Space with Auto-Fit
```css
/* ❌ Problematic - can create uneven rows */
.categories-grid {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}
```

### Solution: Fixed Column Count
```css
/* ✅ Fixed - creates even rows */
.categories-grid {
  grid-template-columns: repeat(3, 1fr);
}

/* ✅ With responsive breakpoints */
@media (max-width: 1024px) {
  .categories-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .categories-grid {
    grid-template-columns: 1fr;
  }
}
```

## Recommended Column Counts

| Items | Desktop | Tablet | Mobile |
|-------|---------|--------|--------|
| 1     | 1       | 1      | 1      |
| 2     | 2       | 2      | 1      |
| 3     | 3       | 2      | 1      |
| 4     | 2       | 2      | 1      |
| 5     | 3       | 2      | 1      |
| 6     | 3       | 2      | 1      |
| 7     | 3       | 2      | 1      |
| 8     | 4       | 2      | 1      |
| 9     | 3       | 2      | 1      |
| 10    | 4       | 2      | 1      |
| 12    | 4       | 2      | 1      |

## Workflow

1. **Scan for issues**:
   ```bash
   node scripts/scan-grid-issues.js
   ```

2. **Fix known issues**:
   ```bash
   node scripts/fix-grid-dead-space.js
   ```

3. **Test the changes**:
   - Open the site in a browser
   - Check different screen sizes
   - Verify no dead space on desktop
   - Ensure responsive behavior works

4. **For new grids**, follow the recommended column counts above

## Dependencies

The scripts require Node.js and the `glob` package:

```bash
npm install glob
```

## Notes

- Always test changes after running the scripts
- The scripts are designed to be safe and non-destructive
- They create backups by only modifying specific patterns
- Responsive breakpoints are added automatically
- The scripts work with the existing codebase structure
