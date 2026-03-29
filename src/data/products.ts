export interface Product {
  id: string
  name: string
  category: string
  image: string
  description: string
  uses: string[]
  benefits: string[]
  consumption: string
  extraction: string
  color: string
}

export const productsDatabase: Product[] = [
  // Premium Superfoods & Specialty
  {
    id: 'sea-buckthorn',
    name: 'Sea Buckthorn Extract & Berries',
    category: 'Premium Superfoods & Specialty',
    image: 'https://images.unsplash.com/photo-1599599810694-b3fa31c1cb1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Premium sea buckthorn extract derived from the nutrient-rich berries of the Hippophae rhamnoides plant. Rich in omega fatty acids, vitamins, and antioxidants.',
    uses: [
      'Dietary supplement for overall wellness',
      'Skincare and anti-aging products',
      'Immune system support',
      'Joint and cardiovascular health',
      'Natural energy and vitality enhancement'
    ],
    benefits: [
      'Rich in Omega-3, 6, and 9 fatty acids',
      'Contains 190+ bioactive compounds',
      'Powerful antioxidant properties',
      'Supports skin elasticity and collagen production',
      'Promotes cardiovascular health',
      'Boosts immune function',
      'Reduces inflammation naturally'
    ],
    consumption: 'Mix 1-2 teaspoons of sea buckthorn powder with water, juice, or smoothie. Can be taken 1-2 times daily with meals. For liquid extract: 1-2 ml with water or juice daily.',
    extraction: 'Cold-pressed extraction from organic sea buckthorn berries. No solvents used. Berries are carefully selected, cleaned, and pressed to preserve all nutrients and bioactive compounds. The extract is then standardized to ensure consistent potency.',
    color: 'text-purple-400'
  },
  {
    id: 'kashmiri-saffron',
    name: 'Premium Kashmiri Saffron',
    category: 'Premium Superfoods & Specialty',
    image: 'https://images.unsplash.com/photo-1596040599857-e4c9b9b8a0d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Premium Grade-A saffron from Kashmir\'s most fertile regions. Known for its superior quality, deep red color, and intense aroma. Each strand is hand-picked.',
    uses: [
      'Culinary spice for gourmet cooking',
      'Traditional Ayurvedic medicine',
      'Beauty and skincare formulations',
      'Anti-inflammatory remedies',
      'Premium gift and luxury product'
    ],
    benefits: [
      'Contains crocin and safranal compounds',
      'Powerful antioxidant properties',
      'Supports mood and mental clarity',
      'Anti-inflammatory and pain relief',
      'Promotes skin radiance and glow',
      'Enhances memory and cognitive function',
      'Aids digestive health'
    ],
    consumption: 'Steep 8-10 strands in warm water or milk for 10-15 minutes. Use in rice dishes, desserts, or beverages. Recommended: 1-2 pinches daily for health benefits.',
    extraction: 'Hand-harvested from the stigmas of Crocus sativus flowers. Each strand is individually selected. Air-dried naturally to preserve color, aroma, and therapeutic properties. No chemicals used.',
    color: 'text-red-400'
  },
  {
    id: 'black-cardamom',
    name: 'Black Cardamom Pods',
    category: 'Premium Superfoods & Specialty',
    image: 'https://images.unsplash.com/photo-1596040599857-e4c9b9b8a0d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Premium black cardamom pods with smoky, aromatic flavor. Hand-selected and dried to perfection. Ideal for culinary and medicinal purposes.',
    uses: [
      'Spice for Indian and Asian cuisine',
      'Tea and beverage flavoring',
      'Digestive health support',
      'Respiratory and throat care',
      'Traditional medicine applications'
    ],
    benefits: [
      'Rich in antioxidants',
      'Aids digestion and prevents bloating',
      'Supports respiratory health',
      'Improves oral health',
      'Anti-inflammatory properties',
      'Helps regulate blood sugar',
      'Enhances food flavor naturally'
    ],
    consumption: 'Crush 2-3 pods and add to tea, rice, or curries. Can be chewed directly for digestive benefits. Use 1 pod per cup of tea for maximum flavor and benefits.',
    extraction: 'Harvested from mature cardamom plants. Pods are slow-dried using traditional methods to develop their characteristic smoky flavor while preserving medicinal compounds.',
    color: 'text-gray-700'
  },
  {
    id: 'organic-stevia',
    name: 'Organic Stevia Leaves',
    category: 'Premium Superfoods & Specialty',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Pure organic stevia powder from premium stevia leaves. 300x sweeter than sugar with zero calories. Perfect natural sweetener alternative.',
    uses: [
      'Natural non-caloric sweetener',
      'Diabetes-friendly sugar replacement',
      'Weight management support',
      'Beverages and food preparation',
      'Health-conscious culinary applications'
    ],
    benefits: [
      'Zero calories and zero glycemic index',
      '300 times sweeter than sugar',
      'Doesn\'t spike blood sugar levels',
      'Supports weight loss goals',
      'Natural, plant-based sweetener',
      'No artificial ingredients',
      'Suitable for diabetic diets'
    ],
    consumption: '1/4 teaspoon of stevia powder equals 1 teaspoon of sugar in sweetness. Start with small amounts as stevia is highly concentrated. Mix in beverages, smoothies, or food.',
    extraction: 'Leaves are dried and processed using water extraction method. No chemical solvents. Pure steviol glycosides are isolated to create concentrated powder.',
    color: 'text-green-500'
  },
  {
    id: 'kasuri-methi',
    name: 'Dried Kasuri Methi - Fenugreek Leaves',
    category: 'Premium Superfoods & Specialty',
    image: 'https://images.unsplash.com/photo-1596040599857-e4c9b9b8a0d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Premium dried fenugreek leaves with distinctive aroma. Used extensively in Indian cuisine and traditional medicine for centuries.',
    uses: [
      'Flavoring for curries and bread',
      'Lactation support for nursing mothers',
      'Blood sugar management',
      'Hair and skin care',
      'Traditional Ayurvedic remedies'
    ],
    benefits: [
      'Rich in iron and minerals',
      'Supports milk production',
      'Regulates blood sugar levels',
      'Improves digestion',
      'Beneficial for hair growth',
      'Anti-inflammatory properties',
      'Enhances food flavor and aroma'
    ],
    consumption: 'Sprinkle 1/2 to 1 teaspoon on curries, breads, or vegetables during cooking. Can be infused in tea for health benefits. Daily use: 1-2 teaspoons.',
    extraction: 'Fenugreek leaves are harvested at peak freshness, then air-dried under natural sunlight. No pesticides or chemicals used. Dried to preserve aromatic compounds and nutrients.',
    color: 'text-green-600'
  },

  // Organic Herbal Supplements
  {
    id: 'moringa-powder',
    name: 'Organic Moringa Leaf Powder',
    category: 'Organic Herbal Supplements',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Pure organic moringa leaf powder from sustainably harvested moringa trees. Contains 46 antioxidants and essential amino acids.',
    uses: [
      'Nutritional supplement for overall health',
      'Energy and stamina boost',
      'Skin and hair care',
      'Anti-inflammatory remedy',
      'Weight management support'
    ],
    benefits: [
      '46 powerful antioxidants',
      'Complete protein with all 9 amino acids',
      'Boosts energy and metabolism',
      'Improves blood circulation',
      'Supports bone health',
      'Enhances skin radiance',
      'Supports healthy hair growth'
    ],
    consumption: 'Mix 1 teaspoon (3-5g) in water, juice, smoothie, or food daily. Can be taken with breakfast for best results. Start with smaller amounts to allow body adjustment.',
    extraction: 'Young moringa leaves are harvested, cleaned, and dried at low temperatures to preserve nutrients. Then ground into fine powder using traditional methods. Completely organic, no additives.',
    color: 'text-green-400'
  },
  {
    id: 'neem-powder',
    name: 'Pure Neem Leaf Powder',
    category: 'Organic Herbal Supplements',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Premium pure neem leaf powder from organic neem trees. Ancient Ayurvedic herb for blood purification and skin health.',
    uses: [
      'Blood purification and detoxification',
      'Skin health and acne treatment',
      'Oral hygiene and dental care',
      'Immune system strengthening',
      'Digestive support'
    ],
    benefits: [
      'Powerful blood purifier',
      'Antibacterial and antifungal properties',
      'Reduces acne and skin infections',
      'Supports oral hygiene',
      'Enhances immune function',
      'Aids in fighting parasites',
      'Promotes healthy digestion'
    ],
    consumption: '1/4 to 1/2 teaspoon twice daily with warm water or juice. Can be mixed with honey for better taste. Take on empty stomach for detox benefits.',
    extraction: 'Neem leaves are hand-picked from mature neem trees, air-dried, and ground into powder. No heat treatment. Processed in clean facilities maintaining purity.',
    color: 'text-green-400'
  },
  {
    id: 'ashwagandha-extract',
    name: 'Organic Ashwagandha Root Extract',
    category: 'Organic Herbal Supplements',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Premium organic ashwagandha root extract. Powerful adaptogen for stress relief and overall wellness. Pure, potent, and standardized.',
    uses: [
      'Stress and anxiety reduction',
      'Better sleep quality',
      'Mental clarity and focus',
      'Athletic performance enhancement',
      'Hormonal balance support'
    ],
    benefits: [
      'Reduces cortisol levels',
      'Improves sleep quality',
      'Enhances mental focus',
      'Boosts physical endurance',
      'Supports hormonal balance',
      'Anti-inflammatory effects',
      'Promotes emotional well-being'
    ],
    consumption: '300-500mg twice daily with warm milk or water. Best taken with food. Results typically seen within 2-4 weeks of consistent use.',
    extraction: 'Ashwagandha roots are organically grown, harvested at maturity, and processed using traditional extraction methods. Standardized to contain 5% withanolides.',
    color: 'text-orange-400'
  },
  {
    id: 'brahmi-extract',
    name: 'Brahmi Leaf Extract',
    category: 'Organic Herbal Supplements',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Premium brahmi leaf extract for cognitive enhancement. Used in Ayurveda for thousands of years for memory and mental clarity.',
    uses: [
      'Memory and cognitive enhancement',
      'Stress and anxiety relief',
      'Better concentration and focus',
      'Hair health and growth',
      'Nerve function support'
    ],
    benefits: [
      'Improves memory retention',
      'Enhances mental clarity',
      'Reduces anxiety and promotes calm',
      'Supports neurotransmitter function',
      'Promotes healthy hair growth',
      'Anti-inflammatory properties',
      'Supports overall brain health'
    ],
    consumption: '200-400mg daily in divided doses with water or milk. Can be taken with food. Best results with consistent daily use.',
    extraction: 'Brahmi leaves are carefully harvested, dried, and processed using water extraction. Concentrated to preserve bacosides and other beneficial compounds.',
    color: 'text-blue-400'
  },
  {
    id: 'tulsi-powder',
    name: 'Holy Basil Powder - Tulsi',
    category: 'Organic Herbal Supplements',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Pure organic tulsi powder from sacred holy basil plants. Known as the adaptogenic herb for stress relief and immunity.',
    uses: [
      'Stress relief and mood enhancement',
      'Immune system strengthening',
      'Respiratory health support',
      'Anti-inflammatory remedy',
      'Spiritual and meditative practices'
    ],
    benefits: [
      'Powerful adaptogenic properties',
      'Reduces stress and anxiety',
      'Boosts immune function',
      'Improves respiratory health',
      'Antibacterial properties',
      'Anti-inflammatory effects',
      'Promotes mental clarity'
    ],
    consumption: 'Steep 1 teaspoon in hot water for 5-10 minutes. Can be taken as tea twice daily. Or mix 1/2 teaspoon directly in water or juice.',
    extraction: 'Holy basil leaves are hand-harvested from organic tulsi plants, dried under shade, and ground into fine powder. No heat damage to active compounds.',
    color: 'text-green-400'
  },
  {
    id: 'isabgol',
    name: 'Isabgol - Psyllium Husk',
    category: 'Organic Herbal Supplements',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Premium Grade-A psyllium husk powder. Natural fiber supplement for digestive health and regular bowel movements.',
    uses: [
      'Digestive health and regularity',
      'Constipation relief',
      'Cholesterol management',
      'Weight loss support',
      'Colon cleansing'
    ],
    benefits: [
      'High in soluble fiber',
      '70% higher water absorption rate',
      'Promotes healthy digestion',
      'Lowers cholesterol levels',
      'Supports beneficial gut bacteria',
      'Aids weight management',
      'Gentle and safe for daily use'
    ],
    consumption: 'Mix 1-2 teaspoons in 8 oz of water or juice. Drink immediately and follow with additional water. Take 1-2 times daily. Start with smaller amounts.',
    extraction: 'Psyllium seeds are harvested, cleaned, and the outer husk is carefully separated. Ground into powder and standardized for consistent quality.',
    color: 'text-amber-400'
  },

  // Premium Spices & Seasonings
  {
    id: 'turmeric-powder',
    name: 'Pure Turmeric Powder - Curcumin Rich',
    category: 'Premium Spices & Seasonings',
    image: 'https://images.unsplash.com/photo-1596040599857-e4c9b9b8a0d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'High-quality turmeric powder with elevated curcumin content. Golden color and warm spice flavor. Perfect for cooking and wellness.',
    uses: [
      'Culinary spice for traditional dishes',
      'Anti-inflammatory supplement',
      'Golden milk preparation',
      'Skincare and beauty remedies',
      'Traditional medicine applications'
    ],
    benefits: [
      'High curcumin content (5-7%)',
      'Powerful anti-inflammatory',
      'Antioxidant properties',
      'Supports joint health',
      'Aids digestive health',
      'Promotes skin radiance',
      'Boosts immune function'
    ],
    consumption: '1/2 to 1 teaspoon daily in food, tea, or milk. Can be mixed with black pepper for better absorption. Use consistently for best results.',
    extraction: 'Turmeric rhizomes are harvested, cleaned, dried in sun, and ground into powder. Quality tested for curcumin content to ensure potency.',
    color: 'text-yellow-400'
  },
  {
    id: 'green-cardamom',
    name: 'Green Cardamom - Premium Grade',
    category: 'Premium Spices & Seasonings',
    image: 'https://images.unsplash.com/photo-1596040599857-e4c9b9b8a0d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Premium green cardamom pods with aromatic flavor and vibrant color. Hand-picked and carefully dried. Restaurant quality.',
    uses: [
      'Spice for curries and rice dishes',
      'Tea and coffee flavoring',
      'Digestive aid and breath freshener',
      'Baking and dessert applications',
      'Traditional wellness remedy'
    ],
    benefits: [
      'Aids digestion naturally',
      'Improves oral hygiene',
      'Anti-inflammatory properties',
      'Supports respiratory health',
      'Enhances food flavor naturally',
      'Rich in antioxidants',
      'Reduces bloating'
    ],
    consumption: 'Crush 2-3 pods and add to rice, curry, or tea. Can be chewed for digestive support. Use 1 pod per cup of liquid for maximum flavor.',
    extraction: 'Cardamom pods are harvested at peak maturity, dried using traditional methods, and hand-sorted for premium quality. No chemicals used.',
    color: 'text-green-500'
  },
  {
    id: 'cumin-seeds',
    name: 'Dried Cumin Seeds - Hand-Selected',
    category: 'Premium Spices & Seasonings',
    image: 'https://images.unsplash.com/photo-1596040599857-e4c9b9b8a0d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Premium quality cumin seeds with warm, earthy flavor. Hand-selected and quality tested. Essential culinary spice.',
    uses: [
      'Spice base for Indian cuisine',
      'Digestive health support',
      'Anti-inflammatory remedy',
      'Iron and mineral supplementation',
      'Traditional medicine applications'
    ],
    benefits: [
      'Rich in cumin aldehyde compound',
      'Improves digestion',
      'Supports iron absorption',
      'Anti-inflammatory properties',
      'Enhances metabolism',
      'Antioxidant-rich',
      'Supports respiratory health'
    ],
    consumption: '1/2 to 1 teaspoon in food preparations. Lightly roast before use for enhanced flavor. Use daily in cooking for health benefits.',
    extraction: 'Cumin seeds are harvested from mature plants, sun-dried, and hand-sorted. No contamination. Stored in optimal conditions to maintain freshness.',
    color: 'text-amber-600'
  },
  {
    id: 'coriander-seeds',
    name: 'Dried Coriander Seeds - Pure',
    category: 'Premium Spices & Seasonings',
    image: 'https://images.unsplash.com/photo-1596040599857-e4c9b9b8a0d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Premium coriander seeds with aromatic, citrusy flavor. Pure and potent. Ideal for cooking and wellness applications.',
    uses: [
      'Essential spice for curries and cooking',
      'Digestive aid and anti-gas remedy',
      'Skin health support',
      'Joint pain relief',
      'Detoxification support'
    ],
    benefits: [
      'Aids digestion and reduces bloating',
      'Anti-inflammatory properties',
      'Supports healthy skin',
      'Rich in antioxidants',
      'Helps regulate blood sugar',
      'Joint pain relief',
      'Improves appetite'
    ],
    consumption: '1/2 to 1 teaspoon in food. Can be roasted lightly and crushed for maximum flavor. Use daily in cooking preparations.',
    extraction: 'Coriander seeds are harvested at optimal ripeness, dried thoroughly, and hand-cleaned. No additives or preservatives used.',
    color: 'text-orange-400'
  },
  {
    id: 'sesame-seeds',
    name: 'White Sesame Seeds - Premium',
    category: 'Premium Spices & Seasonings',
    image: 'https://images.unsplash.com/photo-1599599810694-b3fa31c1cb1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'High-quality white sesame seeds with nutty flavor. Rich in calcium, minerals, and nutrients. Perfect for cooking and snacking.',
    uses: [
      'Culinary ingredient for Asian cuisine',
      'Calcium and mineral supplementation',
      'Sesame oil and tahini production',
      'Baking and garnishing',
      'Traditional wellness applications'
    ],
    benefits: [
      'High in calcium and minerals',
      'Rich in sesamin and sesamol antioxidants',
      'Supports bone health',
      'Improves skin health',
      'Enhances hair quality',
      'Supports healthy cholesterol',
      'Rich in plant-based protein'
    ],
    consumption: '1-2 tablespoons daily in food, smoothies, or as snack. Can be lightly roasted for enhanced flavor. Mix in yogurt or salads.',
    extraction: 'Sesame seeds are harvested from mature plants, cleaned thoroughly, and dried to perfection. No chemical treatment used.',
    color: 'text-amber-100'
  },
  {
    id: 'mustard-seeds',
    name: 'Brown Mustard Seeds - Organic',
    category: 'Premium Spices & Seasonings',
    image: 'https://images.unsplash.com/photo-1596040599857-e4c9b9b8a0d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Organic brown mustard seeds with pungent flavor. Essential spice for pickling and traditional cooking. High quality and potent.',
    uses: [
      'Essential pickling and preserve ingredient',
      'Culinary spice for curries',
      'Condiment and mustard production',
      'Digestive aid',
      'Anti-inflammatory remedy'
    ],
    benefits: [
      'Rich in selenium and omega-3 fatty acids',
      'Supports digestion',
      'Anti-inflammatory properties',
      'Boosts circulation',
      'Rich in antioxidants',
      'Supports bone health',
      'Joint pain relief'
    ],
    consumption: '1/2 to 1 teaspoon in cooking or pickling. Temper in hot oil before adding to dishes for maximum flavor. Use regularly in traditional recipes.',
    extraction: 'Brown mustard seeds are organically grown, harvested at maturity, dried, and sorted for quality. Maintains natural potency and flavor.',
    color: 'text-yellow-900'
  },

  // Premium Nutraceuticals
  {
    id: 'ashwagandha-ksm66',
    name: 'Ashwagandha Extract - KSM-66',
    category: 'Premium Nutraceuticals',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Full-spectrum ashwagandha root extract standardized to KSM-66. Clinically researched. Superior stress relief and wellness support.',
    uses: [
      'Stress and anxiety management',
      'Sleep quality enhancement',
      'Mental focus and clarity',
      'Athletic performance boost',
      'Hormonal balance support'
    ],
    benefits: [
      'Clinically proven to reduce stress',
      '65% withanolide content',
      'Improves sleep quality by 72%',
      'Enhances cognitive function',
      'Supports athletic endurance',
      'Balances cortisol levels',
      'Promotes emotional resilience'
    ],
    consumption: '300-500mg once or twice daily with meals. Can be taken with warm milk. Consistent daily use recommended for best results (4-8 weeks).',
    extraction: 'Organic ashwagandha roots undergo proprietary extraction preserving all alkaloids and withanolides. Standardized to 5% withanolides and 65% alkaloids.',
    color: 'text-red-400'
  },
  {
    id: 'turmeric-extract',
    name: 'Organic Turmeric Curcumin Extract - 95%',
    category: 'Premium Nutraceuticals',
    image: 'https://images.unsplash.com/photo-1596040599857-e4c9b9b8a0d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Premium turmeric curcumin extract with 95% curcuminoids. Highly bioavailable and potent. Superior anti-inflammatory supplement.',
    uses: [
      'Joint and arthritis support',
      'Anti-inflammatory remedy',
      'Brain health and memory',
      'Cardiovascular support',
      'Total wellness support'
    ],
    benefits: [
      '95% standardized curcuminoids',
      'Powerful anti-inflammatory',
      'Supports joint mobility',
      'Brain health and neuroprotection',
      'Cardiovascular support',
      'Antioxidant properties',
      'Supports healthy aging'
    ],
    consumption: '400-500mg twice daily with food and black pepper for enhanced absorption. Can be taken with turmeric milk or supplements.',
    extraction: 'Turmeric rhizomes are extracted using advanced proprietary methods. Standardized to 95% curcuminoids for maximum potency and bioavailability.',
    color: 'text-yellow-600'
  },
  {
    id: 'shilajit-extract',
    name: 'Himalayan Shilajit Extract',
    category: 'Premium Nutraceuticals',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Pure Himalayan shilajit extract from elevated altitudes. Contains 84+ minerals and fulvic acid. Premium energy and vitality supplement.',
    uses: [
      'Energy and stamina enhancement',
      'Athletic performance support',
      'Cognitive function improvement',
      'Mineral and nutrient supplementation',
      'Anti-aging and longevity support'
    ],
    benefits: [
      'Contains 84+ minerals and trace elements',
      'High fulvic acid content',
      'Boosts energy and stamina',
      'Improves athletic performance',
      'Enhances cognitive clarity',
      'Supports mitochondrial function',
      'Anti-aging properties'
    ],
    consumption: '300-500mg once or twice daily with warm milk or water. Can be taken on empty stomach. Best taken consistently for 4-8 weeks.',
    extraction: 'Shilajit is collected from pristine Himalayan regions above 15,000 feet altitude. Purified using traditional methods without chemicals.',
    color: 'text-gray-800'
  },
  {
    id: 'bacopa-extract',
    name: 'Bacopa Moniera Extract',
    category: 'Premium Nutraceuticals',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Premium bacopa moniera extract for cognitive enhancement. Ayurvedic brain tonic with clinical research backing.',
    uses: [
      'Memory and learning enhancement',
      'Mental clarity and focus',
      'Anxiety and stress relief',
      'Brain aging prevention',
      'Test and exam preparation support'
    ],
    benefits: [
      'Improves memory retention by 35%',
      'Enhances learning ability',
      'Reduces anxiety naturally',
      'Neuroprotective properties',
      'Improves verbal learning',
      'Supports mental clarity',
      'Brain aging prevention'
    ],
    consumption: '200-300mg once or twice daily with meals. Results typically visible within 4-6 weeks of consistent use.',
    extraction: 'Bacopa leaves are carefully selected, dried, and extracted using traditional water methods. Standardized for bacosides content.',
    color: 'text-blue-400'
  },
  {
    id: 'triphala-powder',
    name: 'Triphala Powder - Ayurvedic Blend',
    category: 'Premium Nutraceuticals',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Traditional Ayurvedic triphala blend of three fruits. Digestive tonic and gentle cleanser. 2000+ years of traditional use.',
    uses: [
      'Digestive health and regularity',
      'Gentle colon cleansing',
      'Immune system support',
      'Eye health and vision',
      'Overall wellness and vitality'
    ],
    benefits: [
      'Promotes healthy digestion',
      'Gentle and effective laxative',
      'Supports immune function',
      'Antioxidant-rich',
      'Improves nutrient absorption',
      'Supports eye health',
      'Anti-inflammatory properties'
    ],
    consumption: '1/2 to 1 teaspoon in warm water at bedtime or morning. Can be taken with warm milk. Consistent use for 2-4 weeks for best results.',
    extraction: 'Three dried fruits (amla, bahera, harad) are blended in traditional ratios. Ground and processed using Ayurvedic methods without modern chemicals.',
    color: 'text-orange-600'
  },
  {
    id: 'cordyceps-extract',
    name: 'Cordyceps Militaris Extract',
    category: 'Premium Nutraceuticals',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Premium cultivated cordyceps militaris extract. Natural energy and endurance booster. Used by athletes worldwide.',
    uses: [
      'Athletic performance enhancement',
      'Energy and endurance increase',
      'Oxygen utilization improvement',
      'Recovery support',
      'Sexual vitality enhancement'
    ],
    benefits: [
      'Improves athletic endurance by 40%',
      'Enhances ATP energy production',
      'Improves oxygen utilization',
      'Supports muscle recovery',
      'Boosts stamina and vitality',
      'Improves sexual function',
      'Anti-fatigue properties'
    ],
    consumption: '1000-2000mg daily in divided doses before workouts. Can be taken 30-60 minutes before exercise for best performance benefits.',
    extraction: 'Cordyceps are cultivated on sterile grain substrate under controlled conditions. Harvested at optimal maturity and extracted for active compounds.',
    color: 'text-red-500'
  }
]
