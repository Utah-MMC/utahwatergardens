import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import PageTemplate from '../components/PageTemplate';
import CTA from '../components/CTA';
import { getAllPlants, createPlantSlug } from '../data/plantData';
import './HomePage.css';

// Data arrays
const products = [
  { name: "Water Lilies", image: "/images/waterLillies.webp", category: "Aquatic Plants" },
  { name: "Floating Plants", image: "/images/IMG_2775.jpg", category: "Aquatic Plants" },
  { name: "Marginal Plants", image: "/images/IMG_2779.jpg", category: "Aquatic Plants" },
  { name: "Submerged Plants", image: "/images/IMG_2770.jpg", category: "Aquatic Plants" },
  { name: "Koi Fish", image: "/images/koi.webp", category: "Fish & Koi" },
  { name: "Pond Pumps", image: "/images/pumpRepair.webp", category: "Pond Supplies" },
  { name: "Goldfish Varieties", image: "/images/IMG_2780.jpg", category: "Fish & Koi" },
  { name: "Pond Liners", image: "/images/IMG_2776.jpg", category: "Pond Supplies" },
  { name: "Filtration Systems", image: "/images/IMG_2782.jpg", category: "Pond Supplies" },
  { name: "Pond Accessories", image: "/images/IMG_2782.jpg", category: "Pond Supplies" },
  { name: "Water Treatments", image: "/images/IMG_2770.jpg", category: "Pond Supplies" },
  { name: "Spring Blooms", image: "/images/IMG_2775.jpg", category: "Seasonal Plants" },
  { name: "Summer Collection", image: "/images/IMG_2779.jpg", category: "Seasonal Plants" },
  { name: "Fall Preparations", image: "/images/IMG_2780.jpg", category: "Seasonal Plants" }
];

const resources = [
  { name: "Care Guides", image: "/images/IMG_2775.jpg", path: "/resources/care-guides", description: "Comprehensive guides for pond and aquatic life care" },
  { name: "Pond Tips & Tricks", image: "/images/IMG_2779.jpg", path: "/resources/tips-tricks", description: "Expert tips to keep your pond healthy and beautiful" },
  { name: "Seasonal Care", image: "/images/IMG_2780.jpg", path: "/resources/seasonal-care", description: "Season-specific care instructions for your pond" },
  { name: "Troubleshooting", image: "/images/IMG_2776.jpg", path: "/resources/troubleshooting", description: "Solutions to common pond problems" },
  { name: "Video Tutorials", image: "/images/IMG_2782.jpg", path: "/resources/video-tutorials", description: "Step-by-step video guides for pond care" },
  { name: "FAQ", image: "/images/IMG_2770.jpg", path: "/resources/faq", description: "Answers to frequently asked questions" }
];

// ---------- Accessible, reusable carousel ----------
function Carousel({
  items,
  pageSize = 4,
  renderItem,
  labelledBy,
  auto = false,
  autoMs = 5000,
}) {
  const totalSlides = Math.ceil(items.length / pageSize);
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const next = useCallback(() => setIndex((p) => (p + 1) % totalSlides), [totalSlides]);
  const prev = useCallback(() => setIndex((p) => (p - 1 + totalSlides) % totalSlides), [totalSlides]);

  // auto-advance (pauses on hover/focus) - optimized for performance
  useEffect(() => {
    if (!auto || totalSlides <= 1) return;
    const el = trackRef.current?.closest("[data-carousel]");
    let id;
    const start = () => (id = window.setInterval(next, autoMs));
    const stop = () => id && window.clearInterval(id);
    start();
    el?.addEventListener("mouseenter", stop, { passive: true });
    el?.addEventListener("focusin", stop, { passive: true });
    el?.addEventListener("mouseleave", start, { passive: true });
    el?.addEventListener("focusout", start, { passive: true });
    return () => { 
      stop(); 
      el?.removeEventListener("mouseenter", stop); 
      el?.removeEventListener("focusin", stop); 
      el?.removeEventListener("mouseleave", start); 
      el?.removeEventListener("focusout", start); 
    };
  }, [auto, autoMs, next, totalSlides]);

  // pointer swipe - optimized for performance
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let startX = 0, dx = 0, dragging = false;
    const down = (e) => { 
      dragging = true; 
      startX = e.clientX; 
      el.setPointerCapture(e.pointerId); 
    };
    const move = (e) => { 
      if (!dragging) return; 
      dx = e.clientX - startX; 
    };
    const up = () => { 
      if (!dragging) return; 
      const threshold = 40; 
      if (dx < -threshold) next(); 
      else if (dx > threshold) prev(); 
      dragging = false; 
      dx = 0; 
    };
    el.addEventListener("pointerdown", down, { passive: true }); 
    el.addEventListener("pointermove", move, { passive: true }); 
    el.addEventListener("pointerup", up, { passive: true }); 
    el.addEventListener("pointercancel", up, { passive: true });
    return () => { 
      el.removeEventListener("pointerdown", down); 
      el.removeEventListener("pointermove", move); 
      el.removeEventListener("pointerup", up); 
      el.removeEventListener("pointercancel", up); 
    };
  }, [next, prev]);

  // keyboard
  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  return (
    <div className="crsl" data-carousel aria-roledescription="carousel" aria-labelledby={labelledBy} onKeyDown={onKeyDown}>
      <div className="crsl-head">
        <div className="crsl-controls" role="group" aria-label="Carousel controls">
          <button className="btn" data-variant="ghost" aria-label="Previous" onClick={prev}>←</button>
          <button className="btn" data-variant="ghost" aria-label="Next" onClick={next}>→</button>
        </div>
      </div>

      <div className="crsl-viewport" ref={trackRef}>
        <div className="crsl-track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {Array.from({ length: totalSlides }, (_, s) => (
            <ul key={s} className="crsl-slide" role="group" aria-roledescription="slide" aria-label={`${s + 1} of ${totalSlides}`}>
              {items.slice(s * pageSize, (s + 1) * pageSize).map((it, i) => (
                <li key={i} className="crsl-item">{renderItem(it)}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div className="crsl-indicators" role="tablist" aria-label="Slides">
        {Array.from({ length: totalSlides }, (_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === index}
            aria-controls={`slide-${i}`}
            className={"dot" + (i === index ? " is-active" : "")}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

// ---------- Page ----------
const HomePage = () => {
  const plantList = useMemo(() => getAllPlants(), []);


  return (
    <PageTemplate
      title="Pond Services Near Salt Lake City, UT | Utah Water Gardens"
      description="Utah's premier pond services near Salt Lake City, UT. Expert pond design, construction, maintenance, and cleaning. Licensed & insured. Call (801) 590-8516 for consultation."
      keywords="pond services near salt lake city ut, salt lake city pond services, pond maintenance salt lake city, pond construction salt lake city, pond cleaning salt lake city, utah water gardens, pond services utah"
      canonical="https://utahwatergardens.com"
      heroTitle="Create Your Dream Water Garden"
      heroSubtitle="From stunning koi ponds to tranquil water features, we bring your aquatic vision to life with expert design, construction, and maintenance."
      heroBackgroundImage="/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg"
      heroBackgroundImageAlt="Pond landscape with waterfall and rock features"
      primaryButtonText="TALK TO EXPERT"
      primaryButtonLink="tel:+18015908516"
      secondaryButtonText="POND SERVICES"
      secondaryButtonLink="/pond-services"
      className="home"
    >
        {/* ABOUT */}
        <section 
          className="section alt" 
          aria-labelledby="about-h"
        >
          <div className="container">
            <div className="row">
              <div className="col-6">
                <header className="section-head">
                  <h2 id="about-h">About Utah Water Gardens</h2>
                  <p>Utah's premier pond and water feature specialists since 1995.</p>
                </header>
                <div className="content">
                  <p>With over 30 years of experience, Utah Water Gardens has been transforming outdoor spaces across Salt Lake City and surrounding areas. We specialize in creating beautiful, sustainable water features that enhance your property and provide years of enjoyment.</p>
                  
                  <div className="stats">
                    <div className="stat">
                      <span className="stat-number">15+</span>
                      <span className="stat-label">Years Experience</span>
                    </div>
                    <div className="stat">
                      <span className="stat-number">2500+</span>
                      <span className="stat-label">Happy Customers</span>
                    </div>
                    <div className="stat">
                      <span className="stat-number">4.9/5</span>
                      <span className="stat-label">Customer Rating</span>
                    </div>
                  </div>

                  <div className="btn-row">
                    <Link to="/about" className="btn" data-variant="primary">Learn More About Us</Link>
                    <a href="tel:+18015908516" className="btn" data-variant="outline">Call (801) 590-8516</a>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="media">
                  <img src="/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg" alt="Beautiful pond with waterfall and rock features" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section 
          className="section" 
          aria-labelledby="svc-h"
        >
        <div className="container">
            <header className="section-head">
              <h2 id="svc-h">Our Services</h2>
              <p>Your full-service pond partner—from design to year-round care.</p>
            </header>
            <div className="cards">
              <ServiceCard
                to="/pond-services/design-build"
                title="Pond Design & Construction"
                img="/images/pondConstruction1000x800.webp"
                alt="Custom pond construction"
              >Transform your vision into reality—from intimate water features to expansive koi ponds.</ServiceCard>

              <ServiceCard
                to="/pond-services/maintenance"
                title="Pond Maintenance & Care"
                img="/images/pondMaintenance.webp"
                alt="Professional pond maintenance"
              >Water quality, plant care, equipment checks, and seasonal prep—handled.</ServiceCard>

              <ServiceCard
                to="/pond-and-lake-dredging"
                title="Lake & Pond Dredging"
                img="/images/pondDredging-topaz-enhance-3.9x.jpeg"
                alt="Pond dredging and restoration"
              >Restore depth, flow, and ecological balance with professional dredging.</ServiceCard>

              <ServiceCard
                to="/pond-services/cleaning"
                title="Pond Cleaning Services"
                img="/images/pondCleanings-topaz-enhance-3.9x.jpeg"
                alt="Professional pond cleaning"
              >Deep cleaning, debris removal, and water clarification for crystal-clear results.</ServiceCard>

              <ServiceCard
                to="/pond-services/repair"
                title="Pond Repair & Troubleshooting"
                img="/images/pumpRepair.webp"
                alt="Pond repair and maintenance"
              >Leak detection, pump repairs, and equipment troubleshooting to keep your pond running smoothly.</ServiceCard>

              <ServiceCard
                to="/plants-fish"
                title="Plants & Fish Stocking"
                img="/images/koi.webp"
                alt="Koi and fish stocking"
              >Largest aquatic plant selection in Utah plus healthy koi & goldfish.</ServiceCard>
          </div>
        </div>
      </section>

        {/* SHOP */}
        <section className="section" aria-labelledby="shop-h">
        <div className="container">
            <header className="section-head row">
              <div>
                <h2 id="shop-h">Shop</h2>
                <p>DIY pond gear, live fish, and plant life. Need help? Our science-driven services have you covered.</p>
              </div>
              <Link to="/shop" className="btn" data-variant="link">Visit the shop →</Link>
            </header>

            <Carousel
              items={products}
              pageSize={4}
              labelledBy="shop-h"
              auto={false}
              autoMs={6000}
              renderItem={(p) => (
                <Link to="/shop" className="card item">
                  <picture>
                    <source srcSet={`${p.image}`} type="image/webp" />
                    <img 
                      src={p.image} 
                      alt={p.name} 
                      loading="lazy"
                      decoding="async"
                      style={{ transform: 'translateZ(0)' }}
                    />
                  </picture>
                  <h3>{p.name}</h3>
                    </Link>
              )}
            />
        </div>
      </section>

        {/* PLANTS */}
        <section className="section alt" aria-labelledby="plant-h">
        <div className="container">
            <header className="section-head row">
              <div>
                <h2 id="plant-h">Our Plant Collection</h2>
                <p>Utah-ready lilies, floaters, and marginals—each with care notes.</p>
              </div>
              <Link to="/plants-fish" className="btn" data-variant="link">View all plants →</Link>
            </header>

            <Carousel
              items={plantList}
              pageSize={4}
              labelledBy="plant-h"
              auto={false}
              renderItem={(plant) => (
                <Link to={`/plant/${createPlantSlug(plant.name)}`} className="card item">
                  <img 
                    src={plant.image} 
                    alt={plant.name} 
                    loading="lazy" 
                    decoding="async"
                    style={{ transform: 'translateZ(0)' }}
                  />
                  <div className="item-body">
                        <h3>{plant.name}</h3>
                    {plant.category && <p className="chip">{plant.category}</p>}
                    {plant.description && <p className="muted clamp-2">{plant.description}</p>}
                    <div className="meta">
                      {plant.availability && <span className="avail">{plant.availability}</span>}
                        </div>
                      </div>
                    </Link>
              )}
            />
        </div>
      </section>

        {/* RESOURCES */}
        <section className="section" aria-labelledby="res-h">
        <div className="container">
            <header 
              className="section-head row"
              style={{
                flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
                alignItems: window.innerWidth <= 768 ? 'flex-start' : 'flex-end',
                gap: window.innerWidth <= 768 ? '0.5rem' : '1rem'
              }}
            >
              <div style={{ width: window.innerWidth <= 768 ? '100%' : 'auto' }}>
                <h2 id="res-h">Resources</h2>
                <p>Guides, tips, seasonal care, troubleshooting, and videos.</p>
              </div>
              <Link 
                to="/resources" 
                className="btn" 
                data-variant="link"
                style={{
                  whiteSpace: window.innerWidth <= 768 ? 'nowrap' : 'normal',
                  fontSize: window.innerWidth <= 768 ? '0.9rem' : '1rem'
                }}
              >
                View all resources →
              </Link>
            </header>

            <Carousel
              items={resources}
              pageSize={3}
              labelledBy="res-h"
              renderItem={(r) => (
                <Link to={r.path} className="card item">
                  <img src={r.image} alt="" loading="lazy" />
                  <div className="item-body">
                    <h3>{r.name}</h3>
                    <p className="muted clamp-2">{r.description}</p>
                  </div>
                </Link>
              )}
            />
        </div>
      </section>

        {/* CTA Section */}
        <CTA />
    </PageTemplate>
  );
};

function ServiceCard({to, title, img, alt, children}){
  return (
    <Link to={to} className="card svc">
      <div className="media">
        <img src={img} alt={alt} loading="lazy" />
      </div>
      <div className="body">
        <h3>{title}</h3>
        <p className="muted">{children}</p>
        <div className="btn-row">
          <span className="btn" data-variant="primary" role="link" aria-hidden>Learn More</span>
        </div>
      </div>
    </Link>
  );
}

export default HomePage;
