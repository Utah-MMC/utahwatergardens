// Distance calculation utilities for service area management

// Salt Lake City coordinates (center point for distance calculations)
const SALT_LAKE_CITY_COORDS = {
  lat: 40.7608,
  lng: -111.8910
};

// Focused zipcode database for 75-mile radius around Salt Lake City
const ZIPCODE_DATABASE = {
  // Utah
  '84101': { lat: 40.7608, lng: -111.8910, city: 'Salt Lake City', state: 'UT' },
  '84102': { lat: 40.7831, lng: -111.8448, city: 'Salt Lake City', state: 'UT' },
  '84103': { lat: 40.7831, lng: -111.8762, city: 'Salt Lake City', state: 'UT' },
  '84104': { lat: 40.7143, lng: -111.9382, city: 'Salt Lake City', state: 'UT' },
  '84105': { lat: 40.6916, lng: -111.8324, city: 'Murray', state: 'UT' },
  '84106': { lat: 40.6916, lng: -111.8638, city: 'Salt Lake City', state: 'UT' },
  '84107': { lat: 40.6602, lng: -111.8638, city: 'Murray', state: 'UT' },
  '84108': { lat: 40.6916, lng: -111.8010, city: 'Salt Lake City', state: 'UT' },
  '84109': { lat: 40.7294, lng: -111.8324, city: 'Salt Lake City', state: 'UT' },
  '84110': { lat: 40.7608, lng: -111.8324, city: 'Salt Lake City', state: 'UT' },
  '84111': { lat: 40.7608, lng: -111.8910, city: 'Salt Lake City', state: 'UT' },
  '84112': { lat: 40.7608, lng: -111.8324, city: 'Salt Lake City', state: 'UT' },
  '84113': { lat: 40.7294, lng: -111.8638, city: 'Salt Lake City', state: 'UT' },
  '84114': { lat: 40.7608, lng: -111.8910, city: 'Salt Lake City', state: 'UT' },
  '84115': { lat: 40.7294, lng: -111.9382, city: 'Salt Lake City', state: 'UT' },
  '84116': { lat: 40.8059, lng: -111.9696, city: 'Salt Lake City', state: 'UT' },
  '84117': { lat: 40.6916, lng: -111.8638, city: 'Salt Lake City', state: 'UT' },
  '84118': { lat: 40.6602, lng: -111.9382, city: 'Taylorsville', state: 'UT' },
  '84119': { lat: 40.6602, lng: -111.9696, city: 'West Valley City', state: 'UT' },
  '84120': { lat: 40.6288, lng: -111.9382, city: 'West Jordan', state: 'UT' },
  '84121': { lat: 40.6602, lng: -111.8324, city: 'Cottonwood Heights', state: 'UT' },
  '84123': { lat: 40.6602, lng: -111.9696, city: 'West Valley City', state: 'UT' },
  '84124': { lat: 40.6602, lng: -111.8638, city: 'Cottonwood Heights', state: 'UT' },
  '84128': { lat: 40.7608, lng: -111.9696, city: 'Salt Lake City', state: 'UT' },
  '84129': { lat: 40.6916, lng: -111.9696, city: 'West Valley City', state: 'UT' },
  '84130': { lat: 40.5659, lng: -111.9382, city: 'Herriman', state: 'UT' },
  '84131': { lat: 40.7294, lng: -111.8324, city: 'Salt Lake City', state: 'UT' },
  '84132': { lat: 40.7608, lng: -111.8324, city: 'Salt Lake City', state: 'UT' },
  '84133': { lat: 40.7608, lng: -111.8910, city: 'Salt Lake City', state: 'UT' },
  '84134': { lat: 40.7294, lng: -111.8910, city: 'Salt Lake City', state: 'UT' },
  '84138': { lat: 40.5659, lng: -111.8638, city: 'Stansbury Park', state: 'UT' },
  '84139': { lat: 40.5659, lng: -111.8638, city: 'Bluffdale', state: 'UT' },
  '84141': { lat: 40.5659, lng: -111.8324, city: 'Herriman', state: 'UT' },
  '84143': { lat: 40.5659, lng: -111.9696, city: 'Riverton', state: 'UT' },
  '84144': { lat: 40.7608, lng: -111.8910, city: 'Salt Lake City', state: 'UT' },
  '84145': { lat: 40.5659, lng: -111.8638, city: 'Draper', state: 'UT' },
  '84147': { lat: 40.5659, lng: -111.8638, city: 'Draper', state: 'UT' },
  '84148': { lat: 40.5659, lng: -111.8638, city: 'Herriman', state: 'UT' },
  '84150': { lat: 40.7608, lng: -111.8910, city: 'Salt Lake City', state: 'UT' },
  '84151': { lat: 40.7608, lng: -111.8910, city: 'Salt Lake City', state: 'UT' },
  '84152': { lat: 40.7608, lng: -111.8910, city: 'Salt Lake City', state: 'UT' },
  '84157': { lat: 40.7608, lng: -111.8910, city: 'Salt Lake City', state: 'UT' },
  '84158': { lat: 40.7608, lng: -111.8910, city: 'Salt Lake City', state: 'UT' },
  '84165': { lat: 40.7608, lng: -111.8910, city: 'Salt Lake City', state: 'UT' },
  '84170': { lat: 40.5659, lng: -111.8638, city: 'South Jordan', state: 'UT' },
  '84171': { lat: 40.5659, lng: -111.8638, city: 'South Jordan', state: 'UT' },
  '84180': { lat: 40.5659, lng: -111.8638, city: 'South Jordan', state: 'UT' },
  '84184': { lat: 40.5659, lng: -111.8638, city: 'South Jordan', state: 'UT' },
  '84190': { lat: 40.7608, lng: -111.8910, city: 'Salt Lake City', state: 'UT' },
  '84199': { lat: 40.7608, lng: -111.8910, city: 'Salt Lake City', state: 'UT' },

  // Idaho (neighboring state)
  '83201': { lat: 42.8713, lng: -112.4455, city: 'Pocatello', state: 'ID' },
  '83202': { lat: 42.8713, lng: -112.4455, city: 'Pocatello', state: 'ID' },
  '83204': { lat: 42.8713, lng: -112.4455, city: 'Pocatello', state: 'ID' },
  '83205': { lat: 42.8713, lng: -112.4455, city: 'Pocatello', state: 'ID' },
  '83206': { lat: 42.8713, lng: -112.4455, city: 'Pocatello', state: 'ID' },
  '83209': { lat: 42.8713, lng: -112.4455, city: 'Pocatello', state: 'ID' },
  '83301': { lat: 42.5584, lng: -114.4608, city: 'Twin Falls', state: 'ID' },
  '83302': { lat: 42.5584, lng: -114.4608, city: 'Twin Falls', state: 'ID' },
  '83303': { lat: 42.5584, lng: -114.4608, city: 'Twin Falls', state: 'ID' },
  '83338': { lat: 42.5584, lng: -114.4608, city: 'Twin Falls', state: 'ID' },
  '83401': { lat: 43.4927, lng: -112.0362, city: 'Rexburg', state: 'ID' },
  '83402': { lat: 43.4927, lng: -112.0362, city: 'Rexburg', state: 'ID' },
  '83404': { lat: 43.4927, lng: -112.0362, city: 'Rexburg', state: 'ID' },
  '83405': { lat: 43.4927, lng: -112.0362, city: 'Rexburg', state: 'ID' },
  '83406': { lat: 43.4927, lng: -112.0362, city: 'Rexburg', state: 'ID' },
  '83440': { lat: 43.4927, lng: -112.0362, city: 'Rexburg', state: 'ID' },
  '83501': { lat: 44.2619, lng: -116.2915, city: 'Lewiston', state: 'ID' },
  '83616': { lat: 43.6135, lng: -116.2023, city: 'Boise', state: 'ID' },
  '83702': { lat: 43.6135, lng: -116.2023, city: 'Boise', state: 'ID' },
  '83703': { lat: 43.6135, lng: -116.2023, city: 'Boise', state: 'ID' },
  '83704': { lat: 43.6135, lng: -116.2023, city: 'Boise', state: 'ID' },
  '83705': { lat: 43.6135, lng: -116.2023, city: 'Boise', state: 'ID' },
  '83706': { lat: 43.6135, lng: -116.2023, city: 'Boise', state: 'ID' },
  '83707': { lat: 43.6135, lng: -116.2023, city: 'Boise', state: 'ID' },
  '83708': { lat: 43.6135, lng: -116.2023, city: 'Boise', state: 'ID' },
  '83709': { lat: 43.6135, lng: -116.2023, city: 'Boise', state: 'ID' },
  '83712': { lat: 43.6135, lng: -116.2023, city: 'Boise', state: 'ID' },
  '83713': { lat: 43.6135, lng: -116.2023, city: 'Boise', state: 'ID' },
  '83714': { lat: 43.6135, lng: -116.2023, city: 'Boise', state: 'ID' },
  '83715': { lat: 43.6135, lng: -116.2023, city: 'Boise', state: 'ID' },
  '83716': { lat: 43.6135, lng: -116.2023, city: 'Boise', state: 'ID' },
  '83717': { lat: 43.6135, lng: -116.2023, city: 'Boise', state: 'ID' },
  '83719': { lat: 43.6135, lng: -116.2023, city: 'Boise', state: 'ID' },
  '83720': { lat: 43.6135, lng: -116.2023, city: 'Boise', state: 'ID' },
  '83721': { lat: 43.6135, lng: -116.2023, city: 'Boise', state: 'ID' },
  '83722': { lat: 43.6135, lng: -116.2023, city: 'Boise', state: 'ID' },
  '83724': { lat: 43.6135, lng: -116.2023, city: 'Boise', state: 'ID' },
  '83725': { lat: 43.6135, lng: -116.2023, city: 'Boise', state: 'ID' },
  '83726': { lat: 43.6135, lng: -116.2023, city: 'Boise', state: 'ID' },
  '83728': { lat: 43.6135, lng: -116.2023, city: 'Boise', state: 'ID' },
  '83729': { lat: 43.6135, lng: -116.2023, city: 'Boise', state: 'ID' },
  '83732': { lat: 43.6135, lng: -116.2023, city: 'Boise', state: 'ID' },
  '83735': { lat: 43.6135, lng: -116.2023, city: 'Boise', state: 'ID' },
  '83756': { lat: 43.6135, lng: -116.2023, city: 'Boise', state: 'ID' },

  // Wyoming (neighboring state) 
  '82001': { lat: 41.1400, lng: -104.8197, city: 'Cheyenne', state: 'WY' },
  '82002': { lat: 41.1400, lng: -104.8197, city: 'Cheyenne', state: 'WY' },
  '82003': { lat: 41.1400, lng: -104.8197, city: 'Cheyenne', state: 'WY' },
  '82007': { lat: 41.1400, lng: -104.8197, city: 'Cheyenne', state: 'WY' },
  '82009': { lat: 41.1400, lng: -104.8197, city: 'Cheyenne', state: 'WY' },
  '82010': { lat: 41.1400, lng: -104.8197, city: 'Cheyenne', state: 'WY' },
  '82070': { lat: 41.1400, lng: -104.8197, city: 'Cheyenne', state: 'WY' },
  '82071': { lat: 41.1400, lng: -104.8197, city: 'Cheyenne', state: 'WY' },
  '82072': { lat: 41.1400, lng: -104.8197, city: 'Cheyenne', state: 'WY' },
  '82073': { lat: 41.1400, lng: -104.8197, city: 'Cheyenne', state: 'WY' },
  '82081': { lat: 41.1400, lng: -104.8197, city: 'Cheyenne', state: 'WY' },
  '82190': { lat: 41.1400, lng: -104.8197, city: 'Cheyenne', state: 'WY' },
  '82414': { lat: 44.2619, lng: -108.2081, city: 'Cody', state: 'WY' },
  '82501': { lat: 42.8666, lng: -106.3131, city: 'Casper', state: 'WY' },
  '82601': { lat: 42.8666, lng: -106.3131, city: 'Casper', state: 'WY' },
  '82602': { lat: 42.8666, lng: -106.3131, city: 'Casper', state: 'WY' },
  '82604': { lat: 42.8666, lng: -106.3131, city: 'Casper', state: 'WY' },
  '82605': { lat: 42.8666, lng: -106.3131, city: 'Casper', state: 'WY' },
  '82609': { lat: 42.8666, lng: -106.3131, city: 'Casper', state: 'WY' },
  '82615': { lat: 42.8666, lng: -106.3131, city: 'Casper', state: 'WY' },

  // Colorado (neighboring state)
  '80201': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80202': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80203': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80204': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80205': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80206': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80207': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80208': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80209': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80210': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80211': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80212': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80213': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80214': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80215': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80216': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80217': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80218': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80219': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80220': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80221': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80222': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80223': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80224': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80225': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80226': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80227': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80228': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80229': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80230': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80231': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80232': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80233': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80234': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80235': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80236': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80237': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80238': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80239': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80241': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80246': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80247': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80248': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80249': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80250': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80251': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80252': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80256': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80257': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80259': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80260': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80261': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80262': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80263': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80264': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80265': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80266': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80271': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80273': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80274': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80279': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80280': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80281': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80290': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80291': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80293': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80294': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },
  '80299': { lat: 39.7392, lng: -104.9903, city: 'Denver', state: 'CO' },

  // Nevada (neighboring state)
  '89101': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89102': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89103': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89104': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89105': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89106': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89107': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89108': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89109': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89110': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89111': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89112': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89113': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89114': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89115': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89116': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89117': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89118': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89119': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89120': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89121': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89122': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89123': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89124': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89125': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89126': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89127': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89128': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89129': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89130': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89131': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89132': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89133': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89134': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89135': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89136': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89137': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89138': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89139': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89141': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89142': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89143': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89144': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89145': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89146': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89147': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89148': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89149': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89150': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89151': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89152': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89153': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89154': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89155': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89156': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89157': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89158': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89159': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89160': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89161': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89162': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89163': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89164': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89165': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89166': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89169': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89170': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89173': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89177': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89178': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89179': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89183': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89185': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89191': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89193': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89195': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },
  '89199': { lat: 36.1699, lng: -115.1398, city: 'Las Vegas', state: 'NV' },

  // Arizona (neighboring state)
  '85001': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85002': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85003': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85004': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85005': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85006': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85007': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85008': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85009': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85010': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85011': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85012': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85013': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85014': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85015': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85016': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85017': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85018': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85019': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85020': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85021': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85022': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85023': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85024': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85025': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85026': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85027': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85028': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85029': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85030': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85031': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85032': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85033': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85034': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85035': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85036': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85037': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85038': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85039': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85040': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85041': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85042': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85043': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85044': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85045': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85046': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85048': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85050': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85051': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85053': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85054': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85055': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85083': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85085': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85086': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85087': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85098': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' },
  '85099': { lat: 33.4484, lng: -112.0740, city: 'Phoenix', state: 'AZ' }
};

// Haversine formula to calculate distance between two points
function calculateDistance(lat1, lng1, lat2, lng2) {
  const R = 3959; // Earth's radius in miles
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLng/2) * Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const distance = R * c;
  return Math.round(distance);
}

// Geocode an address using a geocoding service
async function geocodeAddress(address) {
  try {
    // In a real implementation, you would use a geocoding service like:
    // - Google Maps Geocoding API
    // - Mapbox Geocoding API
    // - OpenCage Geocoding API
    
    // For now, we'll return a mock response
    // In production, replace this with actual geocoding service
    const mockGeocodingResponse = {
      lat: 40.7608 + (Math.random() - 0.5) * 0.1, // Random lat within ~5 miles
      lng: -111.8910 + (Math.random() - 0.5) * 0.1, // Random lng within ~5 miles
      formatted_address: address
    };
    
    return mockGeocodingResponse;
  } catch (error) {
    console.error('Geocoding error:', error);
    throw new Error('Unable to geocode address');
  }
}

// Calculate distance from Salt Lake City using zipcode database
export async function getDistanceFromSaltLakeCity(zipcode) {
  try {
    // Check if zipcode exists in our database
    const zipcodeData = ZIPCODE_DATABASE[zipcode];
    
    if (!zipcodeData) {
      // If zipcode is not in our database, it's outside our service area
      throw new Error('ZIPCODE_NOT_FOUND');
    }
    
    const distance = calculateDistance(
      SALT_LAKE_CITY_COORDS.lat,
      SALT_LAKE_CITY_COORDS.lng,
      zipcodeData.lat,
      zipcodeData.lng
    );
    
    return {
      distance,
      coordinates: { lat: zipcodeData.lat, lng: zipcodeData.lng },
      cityInfo: {
        city: zipcodeData.city,
        state: zipcodeData.state,
        zipcode: zipcode
      },
      isOutOfArea: distance >= 50
    };
  } catch (error) {
    if (error.message === 'ZIPCODE_NOT_FOUND') {
      throw error;
    }
    console.error('Distance calculation error:', error);
    throw new Error('Unable to calculate distance');
  }
}

// Check if an address is within the primary service area
export function isWithinServiceArea(distance) {
  return distance < 50;
}

// Get service area status message
export function getServiceAreaMessage(distance) {
  if (distance < 50) {
    return {
      status: 'primary',
      message: `You're ${distance} miles from Salt Lake City. You're within our primary service area!`,
      action: 'standard'
    };
  } else {
    return {
      status: 'extended',
      message: `You're ${distance} miles from Salt Lake City. You're outside our primary service area, but we may be able to help with extended service.`,
      action: 'extended'
    };
  }
}

// Common Utah cities with approximate distances from Salt Lake City
export const UTAH_CITIES_DISTANCES = {
  'Salt Lake City': 0,
  'West Jordan': 12,
  'Murray': 8,
  'Sandy': 15,
  'West Valley City': 8,
  'Draper': 20,
  'Cottonwood Heights': 12,
  'Holladay': 8,
  'Layton': 25,
  'Bountiful': 15,
  'Farmington': 20,
  'Centerville': 18,
  'Kaysville': 22,
  'Clearfield': 30,
  'Clinton': 35,
  'Syracuse': 40,
  'Provo': 45,
  'Orem': 42,
  'American Fork': 40,
  'Lehi': 35,
  'Pleasant Grove': 38,
  'Spanish Fork': 50,
  'Springville': 48,
  'Alpine': 35,
  'Ogden': 40,
  'Roy': 35,
  'South Ogden': 38,
  'North Ogden': 42,
  'Riverdale': 37,
  'Washington Terrace': 36,
  'Farr West': 45,
  'Park City': 35,
  'Heber City': 50,
  'Logan': 80,
  'St. George': 300,
  'Cedar City': 250,
  'Moab': 240,
  'Price': 120,
  'Vernal': 180,
  'Roosevelt': 150,
  'Richfield': 150,
  'Ephraim': 120,
  'Manti': 130,
  'Nephi': 100,
  'Fillmore': 140,
  'Delta': 160,
  'Tooele': 35,
  'Grantsville': 45,
  'Wendover': 120,
  'Evanston': 80,
  'Rock Springs': 150,
  'Jackson': 280,
  'Idaho Falls': 200,
  'Pocatello': 150,
  'Twin Falls': 180,
  'Boise': 350
};

// Get approximate distance for known Utah cities
export function getApproximateDistance(city, state = 'UT') {
  const cityKey = city.toLowerCase();
  const stateKey = state.toUpperCase();
  
  // Check Utah cities first
  if (stateKey === 'UT') {
    for (const [cityName, distance] of Object.entries(UTAH_CITIES_DISTANCES)) {
      if (cityName.toLowerCase() === cityKey) {
        return distance;
      }
    }
  }
  
  // For cities not in our list, return null to indicate geocoding needed
  return null;
}

// Validate address format
export function validateAddress(address) {
  if (!address || address.trim().length < 5) {
    return { valid: false, error: 'Address must be at least 5 characters long' };
  }
  
  // Basic address validation
  const addressRegex = /^[\w\s.,#-]+$/;
  if (!addressRegex.test(address)) {
    return { valid: false, error: 'Address contains invalid characters' };
  }
  
  return { valid: true };
}

// Format distance for display
export function formatDistance(distance) {
  if (distance < 1) {
    return 'Less than 1 mile';
  } else if (distance === 1) {
    return '1 mile';
  } else {
    return `${distance} miles`;
  }
}
