from app.models import db, Stock

def seed_stocks():
    all_stocks = [ Stock(symbol="TSLA", name="Tesla"),
    Stock(symbol="AAPL", name="Apple"),
    Stock(symbol="MSFT", name="Microsoft"),
    Stock(symbol="AMZN", name="Amazon"),
    Stock(symbol="ZM", name="Zoom"),
    Stock(symbol="HOOD", name="Robinhood Markets"),
    Stock(symbol="GOOGL", name="Alphabet Class A"),
    Stock(symbol="GOOG", name="Alphabet Class C"),
    Stock(symbol="FB", name="Facebook"),
    Stock(symbol="TSM", name="Taiwan Semiconductor Manufacturing"),
    Stock(symbol="BABA", name="Alibaba"),
    Stock(symbol="GM", name="General Motors"),
    Stock(symbol="GME", name="GameStop"),
    Stock(symbol="AMC", name="AMC Entertainment"),
    Stock(symbol="ZTS", name="Zoetis"),
    Stock(symbol="ABNB", name="Airbnb"),
    Stock(symbol="TWTR", name="Twitter"),
    Stock(symbol="HMC", name="Honda"),
    Stock(symbol="SPOT", name="Spotify"),
    Stock(symbol="FDX", name="FedEx"),
    Stock(symbol="ROST", name="Ross"),
    Stock(symbol="JPM", name="JPMorgan Chase"),
    Stock(symbol="DOW", name="Dow"),
    Stock(symbol="V", name="Visa"),
    Stock(symbol="DASH", name="DoorDash"),
    Stock(symbol="NOK", name="Nokia"),
    Stock(symbol="RBLX", name="Roblox"),
    Stock(symbol="KHC", name="Kraft Foods"),
    Stock(symbol="BMWYY", name="BMW"),
    Stock(symbol="BLNK", name="Blink Charging"),
    Stock(symbol="FSR", name="Fisker"),
    Stock(symbol="FLDM", name="Fluidigm"),
    Stock(symbol="TNXP", name="Tonix Pharmaceuticals"),
    Stock(symbol="ASXC", name="Asensus Surgical"),
    Stock(symbol="BYDDY", name="BYD Company"),
    Stock(symbol="IBIO", name="iBio"),
    Stock(symbol="SLV", name="iShares Silver trust"),
    Stock(symbol="EHTH", name="eHealth"),
    Stock(symbol="SVM", name="Silvercorp Metals"),
    Stock(symbol="EXPR", name="Express"),
    Stock(symbol="CYRX", name="CryoPort"),
    Stock(symbol="PLAY", name="Dave & Buster's"),
    Stock(symbol="GNUS", name="Genius Brands"),
    Stock(symbol="TLRY", name="Tilray"),
    Stock(symbol="BMRN", name="BioMarin"),
    Stock(symbol="NKLA", name="Nikola"),
    Stock(symbol="BBBY", name="Bed Bath & Beyond"),
    Stock(symbol="M", name="Macy's"),
    Stock(symbol="UA", name="Under Armour"),
    Stock(symbol="SNDL", name="Sundial Growers"),
    Stock(symbol="ACB", name="Aurora Cannabis"),
    Stock(symbol="ZOM", name="Zomedica"),
    Stock(symbol="GPRO", name="GoPro"),
    Stock(symbol="OGI", name="OrganiGram"),
    Stock(symbol="NAKD", name="Naked Brand"),
    Stock(symbol="BAC", name="Bank of America"),
    Stock(symbol="CGC", name="Canopy Growth"),
    Stock(symbol="FCEL", name="FuelCell Energy"),
    Stock(symbol="SPCE", name="Virgin Galactic Holdings"),
    Stock(symbol="IDEX", name="Ideanomics"),
    Stock(symbol="NCLH", name="Norwegian Cruise Line"),
    Stock(symbol="VOO", name="Vanguard S&P 500 ETF"),
    Stock(symbol="SPY", name="SPDR S&P 500 ETF"),
    Stock(symbol="ZNGA", name="Zynga"),
    Stock(symbol="BB", name="Blackberry"),
    Stock(symbol="PSEC", name="Prospect Capital"),
    Stock(symbol="CRON", name="Cronos Group"),
    Stock(symbol="OCGN", name="Ocugen"),
    Stock(symbol="BNGO", name="Bionano Genomics"),
    Stock(symbol="ARKK", name="ARK Innovation ETF"),
    Stock(symbol="TXMD", name="TherapeuticsMD"),
    Stock(symbol="MRO", name="Marathon Oil"),
    Stock(symbol="RIOT", name="Riot Blockchain"),
    Stock(symbol="HEXO", name="HEXO"),
    Stock(symbol="JBLU", name="JetBlue Airways"),
    Stock(symbol="CPRX", name="Catalyst Pharmaceuticals"),
    Stock(symbol="RYCEY", name="Rolls-Royce"),
    Stock(symbol="NNDM", name="Nano Dimension"),
    Stock(symbol="ET", name="Energy Transfer"),
    Stock(symbol="VTI", name="Vanguard Total Stock Market ETF"),
    Stock(symbol="SOS", name="SOS Limited"),
    Stock(symbol="CHPT", name="ChargePoint"),
    Stock(symbol="MVIS", name="MicroVision"),
    Stock(symbol="IVR", name="Invesco Mortgage Capital"),
    Stock(symbol="NRZ", name="New Residential Invesment"),
    Stock(symbol="SAVE", name="Spirit Airlines"),
    Stock(symbol="SENS", name="Senseonics"),
    Stock(symbol="GSAT", name="Globalstar"),
    Stock(symbol="PENN", name="Penn National Gambling"),
    Stock(symbol="INO", name="Inovio"),
    Stock(symbol="GOOS", name="Canada Goose"),
    Stock(symbol="SPPI", name="Spectrum Pharmaceuticals"),
    Stock(symbol="EPIX", name="Essa Pharma"),
    Stock(symbol="GH", name="Guardant Health"),
    Stock(symbol="POSH", name="Poshmark"),
    Stock(symbol="WOOF", name="Petco Health and Wellness"),
    Stock(symbol="INPX", name="Inpixon"),
    Stock(symbol="LU", name="Lufax"),
    Stock(symbol="BLUE", name="Bluebird bio"),
    Stock(symbol="WISH", name="ContextLogic"),
    Stock(symbol="NOVA", name="Sunnova Energy"),
    Stock(symbol="PAAS", name="Pan American Silver"),
    Stock(symbol="OTLK", name="Outlook Therapeutics"),
    Stock(symbol="ARPO", name="Aerpio Pharmaceuticals"),
    Stock(symbol="LPCN", name="Lipocine"),
    Stock(symbol="CRBP", name="Corbus Pharmaceuticals"),
    Stock(symbol="OVID", name="Ovid Therapeutics"),
    Stock(symbol="ACST", name="Acasti Pharma"),
    Stock(symbol="TRCH", name="Torchlight Energy Resources"),
    Stock(symbol="BMBL", name="Bumble"),
    Stock(symbol="VXRT", name="Vaxart"),
    Stock(symbol="JNJ", name="Johnson & Johnson"),
    Stock(symbol="NVDA", name="NVIDIA"),
    Stock(symbol="WMT", name="Walmart"),
    Stock(symbol="KDP", name="Keurig Dr Pepper"),
    Stock(symbol="PINS", name="Pinterest"),
    Stock(symbol="SNAP", name="Snap"),
    Stock(symbol="WBA", name="Walgreens"),
    Stock(symbol="NDAQ", name="Nasdaq"),
    Stock(symbol="UNH", name="UnitedHealth"),
    Stock(symbol="TWLO", name="Twilio"),
    Stock(symbol="WORK", name="Slack"),
    Stock(symbol="F", name="Ford Motor"),
    Stock(symbol="MA", name="Mastercard"),
    Stock(symbol="HD", name="Home Depot"),
    Stock(symbol="PG", name="Procter & Gamble"),
    Stock(symbol="HSY", name="Hershey"),
    Stock(symbol="DFS", name="Discover"),
    Stock(symbol="DIS", name="Disney"),
    Stock(symbol="EA", name="Electronic Artis"),
    Stock(symbol="CMG", name="Chipotle"),
    Stock(symbol="SRE", name="Sempra Energy"),
    Stock(symbol="UBER", name="Uber"),
    Stock(symbol="MAR", name="Mariott"),
    Stock(symbol="LULU", name="Lululemon Athletica"),
    Stock(symbol="PYPL", name="PayPal"),
    Stock(symbol="ASML", name="ASML Holding"),
    Stock(symbol="ZIP", name="ZipRecruiter"),
    Stock(symbol="CMCSA", name="Comcast"),
    Stock(symbol="XOM", name="Exxon Mobil"),
    Stock(symbol="AZO", name="AutoZone"),
    Stock(symbol="ZG", name="Zillow Class A"),
    Stock(symbol="Z", name="Zillow Class C"),
    Stock(symbol="DKNG", name="DraftKings"),
    Stock(symbol="DAL", name="Delta Air Lines"),
    Stock(symbol="SONY", name="Sony"),
    Stock(symbol="GE", name="General Electric"),
    Stock(symbol="ROKU", name="Roku"),
    Stock(symbol="ADBE", name="Adobe"),
    Stock(symbol="KO", name="Coca-Cola"),
    Stock(symbol="VZ", name="Verizon"),
    Stock(symbol="ETSY", name="Etsy"),
    Stock(symbol="ATVI", name="Activision Blizzard"),
    Stock(symbol="TM", name="Toyota"),
    Stock(symbol="INTC", name="Intel"),
    Stock(symbol="ORCL", name="Oracle"),
    Stock(symbol="CVS", name="CVS Health"),
    Stock(symbol="ALL", name="Allstate"),
    Stock(symbol="CSCO", name="Cisco"),
    Stock(symbol="MNST", name="Monster"),
    Stock(symbol="DISCB", name="Discovery"),
    Stock(symbol="UAL", name="United Airlines"),
    Stock(symbol="NFLX", name="Netflix"),
    Stock(symbol="BBY", name="Best Buy"),
    Stock(symbol="CRM", name="Salesforce"),
    Stock(symbol="PFE", name="Pfizer"),
    Stock(symbol="CHWY", name="Chewy"),
    Stock(symbol="BCS", name="Barclays"),
    Stock(symbol="RACE", name="Ferrari"),
    Stock(symbol="NKE", name="Nike"),
    Stock(symbol="LYFT", name="Lyft"),
    Stock(symbol="SQ", name="Square"),
    Stock(symbol="T", name="AT&T"),
    Stock(symbol="ABT", name="Abbot Laboratories"),
    Stock(symbol="LUV", name="Southwest Airlines"),
    Stock(symbol="PEP", name="Pepsi"),
    Stock(symbol="CVX", name="Chevron"),
    Stock(symbol="COIN", name="Coinbase"),
    Stock(symbol="ABV", name="AbbVie"),
    Stock(symbol="NVS", name="Novartis AG"),
    Stock(symbol="EXPE", name="Expedia"),
    Stock(symbol="WFC", name="Wells Fargo"),
    Stock(symbol="AVGO", name="Broadcom"),
    Stock(symbol="DUOL", name="Duolingo"),
    Stock(symbol="CVNA", name="Carvano"),
    Stock(symbol="MRK", name="Merck"),
    Stock(symbol="OKTA", name="Okta"),
    Stock(symbol="LLY", name="Eli Lilly"),
    Stock(symbol="BHP", name="BHP Group"),
    Stock(symbol="UPS", name="United Parcel Service"),
    Stock(symbol="TMO", name="Thermo Fisher Scientific"),
    Stock(symbol="DHR", name="Danaher"),
    Stock(symbol="NVO", name="Novo Nordisk"),
    Stock(symbol="ACN", name="Accenture plc Class A"),
    Stock(symbol="TMUS", name="T-Mobile"),
    Stock(symbol="TXN", name="Texas Instruments"),
    Stock(symbol="MCD", name="McDonald's"),
    Stock(symbol="PLUG", name="Plug Power"),
    Stock(symbol="MDB", name="MongoDB"),
    Stock(symbol="MDT", name="Medtronic"),
    Stock(symbol="DLTR", name="Dollar Tree"),
    Stock(symbol="MS", name="Morgan Stanley"),
    Stock(symbol="K", name="Kellogg"),
    Stock(symbol="COST", name="Costco Wholesale"),
    Stock(symbol="SAP", name="SAP SE"),
    Stock(symbol="CLX", name="Clorox"),
    Stock(symbol="C", name="Citigroup"),
    Stock(symbol="HON", name="Honeywell"),
    Stock(symbol="UL", name="Unilever PLC"),
    Stock(symbol="LIN", name="Linde"),
    Stock(symbol="GIS", name="General Mills"),
    Stock(symbol="XEL", name="Xcel Energy"),
    Stock(symbol="LOGI", name="Logitech"),
    Stock(symbol="TGT", name="Target"),
    Stock(symbol="NET", name="Cloudflare"),
    Stock(symbol="IRBT", name="iRobot"),
    Stock(symbol="UPWK", name="Upwork"),
    Stock(symbol="RDFN", name="Redfin"),
    Stock(symbol="FVRR", name="Fiverr"),
    Stock(symbol="BYND", name="Beyond Meat"),
    Stock(symbol="ISRG", name="Intuitive Surgical"),
    Stock(symbol="BRK.A", name="Berkshire Hathaway"),
    Stock(symbol="BRK.B", name="Berkshire Hathaway"),
    Stock(symbol="DPZ", name="Domino's Pizza"),
    Stock(symbol="SNOW", name="Snowflake"),
    Stock(symbol="SHOP", name="Shopify"),
    Stock(symbol="BBL", name="BHP Group"),
    Stock(symbol="QCOM", name="QUALCOMM"),
    Stock(symbol="PM", name="Philip Morris"),
    Stock(symbol="BUD", name="Anheuser-Busch Inbev"),
    Stock(symbol="UNP", name="Union Pacific"),
    Stock(symbol="AZN", name="AstraZeneca"),
    Stock(symbol="MTCH", name="Match"),
    Stock(symbol="RY", name="Royal Bank of Canada"),
    Stock(symbol="DOCU", name="DocuSign"),
    Stock(symbol="BMY", name="Bristol-Myers Squibb"),
    Stock(symbol="BA", name="Boeing"),
    Stock(symbol="NEE", name="NextEra Energy"),
    Stock(symbol="CHTR", name="Charter Communications"),
    Stock(symbol="CCIV", name="Churchill Capital"),
    Stock(symbol="PLTR", name="Palantir Technologies"),
    Stock(symbol="LI", name="Li Auto"),
    Stock(symbol="XPEV", name="Xpeng"),
    Stock(symbol="ULTA", name="Ulta Beauty"),
    Stock(symbol="FUBO", name="Fubo"),
    Stock(symbol="WKHS", name="Workhorse"),
    Stock(symbol="LB", name="L Brands"),
    Stock(symbol="RIO", name="Rio Tinto"),
    Stock(symbol="HDB", name="HDFC Bank"),
    Stock(symbol="SCHW", name="Charles Schwab"),
    Stock(symbol="LOW", name="Lowe's"),
    Stock(symbol="AMGN", name="Amgen"),
    Stock(symbol="RTX", name="Raytheon Technologies"),
    Stock(symbol="SBUX", name="Starbucks"),
    Stock(symbol="SKM", name="SK Telecom"),
    Stock(symbol="BLK", name="BlackRock"),
    Stock(symbol="SNY", name="Sanofi"),
    Stock(symbol="SE", name="Sea Limited AMerican Depositary Shares"),
    Stock(symbol="HSBC", name="HSBC Holdings"),
    Stock(symbol="CAT", name="Caterpillar"),
    Stock(symbol="TD", name="Toronto Dominion Bank"),
    Stock(symbol="SIRI", name="Sirius XM"),
    Stock(symbol="AXP", name="American Express"),
    Stock(symbol="KMX", name="CarMax"),
    Stock(symbol="IBM", name="International Business Machines"),
    Stock(symbol="AMAT", name="Applied Materials"),
    Stock(symbol="GS", name="Goldman Sachs"),
    Stock(symbol="CSAN", name="Cosan"),
    Stock(symbol="TOT", name="Total"),
    Stock(symbol="INTU", name="Intuit"),
    Stock(symbol="AAL", name="American Airlines"),
    Stock(symbol="MMM", name="3M"),
    Stock(symbol="AMT", name="American Tower"),
    Stock(symbol="JD", name="JD.com"),
    Stock(symbol="KR", name="Kroger"),
    Stock(symbol="TTD", name="The Trade Desk"),
    Stock(symbol="DE", name="Deere & Company"),
    Stock(symbol="DEO", name="Diaegeo"),
    Stock(symbol="BURL", name="Burlington Stores"),
    Stock(symbol="EL", name="Estee Lauder"),
    Stock(symbol="DISH", name="DISH Network"),
    Stock(symbol="VALE", name="Vale"),
    Stock(symbol="Real", name="The RealReal"),
    Stock(symbol="LMT", name="Lockheed Martin"),
    Stock(symbol="AMCX", name="AMC Networks"),
    Stock(symbol="DIT", name="Amcon Distributing"),
    Stock(symbol="ZI", name="ZoomInfo"),
    Stock(symbol="GSK", name="GlaxoSmithKline"),
    Stock(symbol="ANTM", name="Anthem"),
    Stock(symbol="AMD", name="Advanced Micro Devices"),
    Stock(symbol="CZR", name="Caesars Entertainment"),
    Stock(symbol="FOXA", name="Fox Class A"),
    Stock(symbol="FOX", name="Fox Class B"),
    Stock(symbol="SNA", name="Snap-On"),
    Stock(symbol="NTAP", name="NetApp"),
    Stock(symbol="BKNG", name="Booking Holdings"),
    Stock(symbol="SYK", name="Stryker"),
    Stock(symbol="MGM", name="MGM Resorts"),
    Stock(symbol="MU", name="Micron"),
    Stock(symbol="NOW", name="ServiceNow"),
    Stock(symbol="LCRX", name="Lam Research"),
    Stock(symbol="FIS", name="Fidelity"),
    Stock(symbol="SPGI", name="S&P Global"),
    Stock(symbol="MO", name="Altria"),
    Stock(symbol="USB", name="US Bank"),
    Stock(symbol="MDLZ", name="Mondelez International"),
    Stock(symbol="BTI", name="British American Tobacco Industry"),
    Stock(symbol="BP", name="BP plc"),
    Stock(symbol="CI", name="Cigna"),
    Stock(symbol="PLD", name="Prologis"),
    Stock(symbol="ADP", name="Automatic Data Processing"),
    Stock(symbol="TFC", name="Truist Financial"),
    Stock(symbol="GILD", name="Gilead Sciences"),
    Stock(symbol="PNC", name="PNC Financial Services Group"),
    Stock(symbol="INFY", name="Infosys"),
    Stock(symbol="CCI", name="Crown Castle International"),
    Stock(symbol="BNS", name="Bank of Nova Scotia"),
    Stock(symbol="TJX", name="TJX Companies"),
    Stock(symbol="CNI", name="Canadian National Railway"),
    Stock(symbol="BAM", name="Brookfield Asset Management"),
    Stock(symbol="NTES", name="NetEase"),
    Stock(symbol="CME", name="CME Group"),
    Stock(symbol="CB", name="Chubb Limited"),
    Stock(symbol="FISV", name="Fiserv"),
    Stock(symbol="CSX", name="CSX Corporation"),
    Stock(symbol="PTR", name="PetroChina"),
    Stock(symbol="SHW", name="Sherwin-Williams"),
    Stock(symbol="DELL", name="Dell"),
    Stock(symbol="COP", name="ConocoPhillips"),
    Stock(symbol="WBK", name="Westpac Banking"),
    Stock(symbol="MUFG", name="Mitsubishi"),
    Stock(symbol="MRNA", name="Moderna"),
    Stock(symbol="ITW", name="Illinois Tools Works"),
    Stock(symbol="SAN", name="Banco Santander"),
    Stock(symbol="COF", name="Capital One Financial"),
    Stock(symbol="EQNR", name="Equinor"),
    Stock(symbol="HCA", name="HCA HealthCare"),
    Stock(symbol="CL", name="Colgate"),
    Stock(symbol="CPNG", name="Coupang"),
    Stock(symbol="MMC", name="Marsh & McLennan"),
    Stock(symbol="BDX", name="Becton, Dickinson & Company"),
    Stock(symbol="NSC", name="Norfolk Southern Corporation"),
    Stock(symbol="ABB", name="Abb Ltd"),
    Stock(symbol="BIDU", name="Baidu"),
    Stock(symbol="BMO", name="Bank of Montreal"),
    Stock(symbol="MELI", name="MercadoLibre"),
    Stock(symbol="SO", name="Southern Company"),
    Stock(symbol="PBR", name="Petroleo Brasileiro"),
    Stock(symbol="APD", name="Air Products and Chemicals"),
    Stock(symbol="VMW", name="Vmware"),
    Stock(symbol="EQIX", name="Equinix"),
    Stock(symbol="SNP", name="China Petroleum & Chemical Corporation"),
    Stock(symbol="BX", name="The Blackstone Group"),
    Stock(symbol="ICE", name="Intercontinental Exchange"),
    Stock(symbol="ADSK", name="Autodesk"),
    Stock(symbol="MCO", name="Moody's"),
    Stock(symbol="FCX", name="Freeport-McMoRan"),
    Stock(symbol="IBN", name="ICICI Bank"),
    Stock(symbol="BEKE", name="KE Holdings"),
    Stock(symbol="ECL", name="Ecolab"),
    Stock(symbol="D", name="Doiminion Energy"),
    Stock(symbol="STLA", name="Stellantis"),
    Stock(symbol="ADI", name="Analog Devices"),
    Stock(symbol="LFC", name="China Life Insurance"),
    Stock(symbol="BSX", name="Boston Scientific"),
    Stock(symbol="EW", name="Edwards Lifesciences"),
    Stock(symbol="WM", name="Waste Management"),
    Stock(symbol="ILMN", name="Illumina"),
    Stock(symbol="BSBR", name="Banco Santander Brasil"),
    Stock(symbol="NOC", name="Northrop Grumman"),
    Stock(symbol="TEAM", name="Atlassian"),
    Stock(symbol="NXPI", name="NXP Semiconductors"),
    Stock(symbol="PGR", name="Progressive"),
    Stock(symbol="ETN", name="Eaton"),
    Stock(symbol="UBS", name="UBS Group"),
    Stock(symbol="EMR", name="Emerson Electric"),
    Stock(symbol="MET", name="MetLife"),
    Stock(symbol="GPN", name="Globaal Payments"),
    Stock(symbol="AON", name="Aon"),
    Stock(symbol="HUM", name="Humana"),
    Stock(symbol="PUK", name="Prudential Public"),
    Stock(symbol="WDAY", name="Workday"),
    Stock(symbol="ITUB", name="Itau Unibanco"),
    Stock(symbol="ING", name="ING"),
    Stock(symbol="ABEV", name="Ambev"),
    Stock(symbol="CP", name="Canadian Pacific Railway"),
    Stock(symbol="VRTX", name="Vertex Pharmaceuticals"),
    Stock(symbol="SCCO", name="Southern Copper"),
    Stock(symbol="TAK", name="Takeda Pharmaceutical"),
    Stock(symbol="GD", name="General Dynamics"),
    Stock(symbol="REGN", name="Regeneron Pharmaceuticals"),
    Stock(symbol="CM", name="Canadian Imperial Bank of Commerce"),
    Stock(symbol="VOD", name="Vodafone"),
    Stock(symbol="EPD", name="Enterprise Products"),
    Stock(symbol="PHG", name="Royal Philips"),
    Stock(symbol="AMX", name="America Movil"),
    Stock(symbol="RELX", name="RELX"),
    Stock(symbol="AMOV", name="American Movil"),
    Stock(symbol="SMFG", name="Sumitomo Mitsui"),
    Stock(symbol="CRWD", name="CrowdStrike"),
    Stock(symbol="TRP", name="TC Energy"),
    Stock(symbol="LYG", name="Lloyds Banking"),
    Stock(symbol="PSA", name="Public Storage"),
    Stock(symbol="BBD", name="Banco Bradesco"),
    Stock(symbol="BNTX", name="BioNTech"),
    Stock(symbol="KLAC", name="KLA"),
    Stock(symbol="DG", name="Dollar General"),
    Stock(symbol="TRI", name="Thomson Reuters"),
    Stock(symbol="JCI", name="Johnson Controls International"),
    Stock(symbol="IDXX", name="IDEXX Laboratories"),
    Stock(symbol="NGG", name="National Grid Transco"),
    Stock(symbol="ROP", name="Roper"),
    Stock(symbol="EOG", name="EOG Resources"),
    Stock(symbol="ALGN", name="Align"),
    Stock(symbol="STZ", name="Constellation Brands"),
    Stock(symbol="IQV", name="IQVIA Holdings"),
    Stock(symbol="BK", name="The Bank of New York Mellon"),
    Stock(symbol="AIG", name="American International Group"),
    Stock(symbol="DD", name="DuPont de Nemours"),
    Stock(symbol="BCE", name="BCE"),
    Stock(symbol="TEL", name="TE Connectivity"),
    Stock(symbol="ERIC", name="Ericsson"),
    Stock(symbol="LHX", name="L3Harris"),
    Stock(symbol="INFO", name="IHS Markit"),
    Stock(symbol="VEEV", name="Veeva Systems"),
    Stock(symbol="LVS", name="Las Vegas Sands"),
    Stock(symbol="EXC", name="Exelon"),
    Stock(symbol="KMB", name="Kimberly-Clark"),
    Stock(symbol="E", name="Eni"),
    Stock(symbol="SLB", name="Schlumberger"),
    Stock(symbol="TROW", name="T.Rowe Price"),
    Stock(symbol="WIT", name="Wipro"),
    Stock(symbol="AEP", name="American Electric Power"),
    Stock(symbol="MCHP", name="Microchip Technology"),
    Stock(symbol="CNC", name="Centene"),
    Stock(symbol="GOLD", name="Barrick Gold"),
    Stock(symbol="DLR", name="Digital Realty Trust"),
    Stock(symbol="PPG", name="PPG"),
    Stock(symbol="BBDO", name="Banco Bradesco"),
    Stock(symbol="SPG", name="Simon Property Group"),
    Stock(symbol="PRU", name="Prudential Financial"),
    Stock(symbol="A", name="Agilent"),
    Stock(symbol="KMI", name="Kinder Morgan"),
    Stock(symbol="BBVA", name="Banco Bilbao"),
    Stock(symbol="PATH", name="UiPath"),
    Stock(symbol="SYY", name="Sysco"),
    Stock(symbol="BAX", name="Baxter"),
    Stock(symbol="CNQ", name="Canadian Natural Resources"),
    Stock(symbol="CRH", name="CRH"),
    Stock(symbol="APTV", name="Aptiv"),
    Stock(symbol="BILI", name="Bilibili"),
    Stock(symbol="MFC", name="Manulife"),
    Stock(symbol="MPC", name="Marathon Petroleum"),
    Stock(symbol="BIIB", name="Biogen"),
    Stock(symbol="APH", name="Amphenol"),
    Stock(symbol="TRV", name="Travelers"),
    Stock(symbol="CARR", name="Carrier Global"),
    Stock(symbol="PH", name="Parker-Hannifin"),
    Stock(symbol="MFG", name="Mizuho"),
    Stock(symbol="ALXN", name="Alexion"),
    Stock(symbol="SNPS", name="Synopsys"),
    Stock(symbol="MSCI", name="MSCI"),
    Stock(symbol="CTSH", name="Cognizant"),
    Stock(symbol="LYB", name="LyondelBassel"),
    Stock(symbol="CMI", name="Cummins"),
    Stock(symbol="ORLY", name="O'Reilly"),
    Stock(symbol="ADM", name="Archer-Daniels-Midland"),
    Stock(symbol="GLW", name="Corning"),
    Stock(symbol="CTAS", name="Cintas"),
    Stock(symbol="PXD", name="Pioneer"),
    Stock(symbol="PSX", name="Phillips 66"),
    Stock(symbol="PAYX", name="Paychex"),
    Stock(symbol="HPQ", name="HP"),
    Stock(symbol="YUM", name="Yum!"),
    Stock(symbol="DXCM", name="DexCom"),
    Stock(symbol="FTNT", name="Fortinet"),
    Stock(symbol="TDG", name="Transdigm"),
    Stock(symbol="NTR", name="Nutrien"),
    Stock(symbol="PANW", name="Palo Alto Networks"),
    Stock(symbol="CDNS", name="Cadence Design Systems"),
    Stock(symbol="IFF", name="International Flavors & Fragrances"),
    Stock(symbol="CCL", name="Carnival"),
    Stock(symbol="ZBH", name="Zimmer Biomet"),
    Stock(symbol="SWK", name="Stanley Black & Decker"),
    Stock(symbol="HLT", name="Hilton Worldwide Holdings"),
    Stock(symbol="MSI", name="Motorola Solutions"),
    Stock(symbol="RSG", name="Reupublic Services"),
    Stock(symbol="ALC", name="Alcon"),
    Stock(symbol="SU", name="Suncor Energy"),
    Stock(symbol="MT", name="Arcelor Mittal"),
    Stock(symbol="NWG", name="NatWest"),
    Stock(symbol="DHI", name="D.R. Horton"),
    Stock(symbol="ORAN", name="Orange"),
    Stock(symbol="FRC", name="FIRST REPUBLIC BANK"),
    Stock(symbol="CSGP", name="CoStar Group"),
    Stock(symbol="WLTW", name="Willis Towers Watson"),
    Stock(symbol="OTIS", name="Otis"),
    Stock(symbol="BASE", name="Couchbase"),
    Stock(symbol="ERAS", name="Erasca"),
    Stock(symbol="BLND", name="Blend Labs"),
    Stock(symbol="STM", name="STMicroelectronics"),
    Stock(symbol="CTVA", name="Corteva"),
    Stock(symbol="BGNE", name="BeiGene"),
    Stock(symbol="PTON", name="Peloton"),
    Stock(symbol="DNUT", name="Krispy Kreme"),
    Stock(symbol="VLO", name="Valero Energy"),
    Stock(symbol="WKME", name="WalkMe"),
    Stock(symbol="MRVL", name="Marvell Tecnhology"),
    Stock(symbol="SBAC", name="SBA Communications"),
    Stock(symbol="KKR", name="KKR"),
    Stock(symbol="WMB", name="Williams Companies"),
    Stock(symbol="W", name="Wayfair"),
    Stock(symbol="PCAR", name="PACCAR"),
    Stock(symbol="CHT", name="Chunghwa Telecom"),
    Stock(symbol="WCN", name="Waste Connections"),
    Stock(symbol="SIVB", name="SVB"),
    Stock(symbol="DB", name="Deutsche Bank"),
    Stock(symbol="SLF", name="Sun Life"),
    Stock(symbol="LBRDK", name="Liberty Broadband"),
    Stock(symbol="PEG", name="Public Service Enterprise"),
    Stock(symbol="VFC", name="V.F. Corporation"),
    Stock(symbol="XLNX", name="Xilinx"),
    Stock(symbol="WELL", name="Welltower"),
    Stock(symbol="AME", name="AMTEK"),
    Stock(symbol="LEN", name="Lennar"),
    Stock(symbol="ODFL", name="Old Dominion Freight Line"),
    Stock(symbol="NUE", name="Nucor"),
    Stock(symbol="LBRDA", name="Liberty Broadband"),
    Stock(symbol="ROK", name="Rockwell Automation"),
    Stock(symbol="TU", name="Telus"),
    Stock(symbol="CPRT", name="Copart"),
    Stock(symbol="TASK", name="TaskUs"),
    Stock(symbol="MQ", name="Marqeta"),
    Stock(symbol="FAST", name="Fastenal"),
    Stock(symbol="MCK", name="McKesson"),
    Stock(symbol="FERG", name="Ferguson"),
    Stock(symbol="MGA", name="Magna"),
    Stock(symbol="MTD", name="Mettler-Toledo"),
    Stock(symbol="STT", name="State Street"),
    Stock(symbol="AJG", name="Arthur J Gallagher"),
    Stock(symbol="AMP", name="Ameriprise"),
    Stock(symbol="VIACA", name="ViacomCBS Class A"),
    Stock(symbol="RMD", name="ResMed"),
    Stock(symbol="FITB", name="Fifth Third Bancorp"),
    Stock(symbol="WEC", name="WEC Energy"),
    Stock(symbol="MPLX", name="MPLX LP"),
    Stock(symbol="CBRE", name="CBRE"),
    Stock(symbol="ANSS", name="ANSYS"),
    Stock(symbol="CUK", name="Carnival"),
    Stock(symbol="FMX", name="Fomento Economico Mexicano"),
    Stock(symbol="TSN", name="Tyson Foods"),
    Stock(symbol="EQR", name="Equity Residential"),
    Stock(symbol="AVB", name="AvalonBay"),
    Stock(symbol="EFX", name="Equifax"),
    Stock(symbol="FNV", name="Franco-Nevada"),
    Stock(symbol="YUMC", name="Yum China"),
    Stock(symbol="WY", name="Weyerhaeuser"),
    Stock(symbol="SGEN", name="Seagen"),
    Stock(symbol="AWK", name="American Water Works"),
    Stock(symbol="DDOG", name="Datadog"),
    Stock(symbol="SWKS", name="Skyworks"),
    Stock(symbol="IBKR", name="Interactive Brokers Group"),
    Stock(symbol="VRSK", name="Verisk Analytics"),
    Stock(symbol="ES", name="Eversource Energy"),
    Stock(symbol="SYF", name="Synchrony"),
    Stock(symbol="CCEP", name="Coca-Cola Europacific Partners"),
    Stock(symbol="VIAC", name="ViacomCBS Class B"),
    Stock(symbol="MXIM", name="Maxim Integrated"),
    Stock(symbol="GRMN", name="Garmin"),
    Stock(symbol="TEF", name="Telefonica"),
    Stock(symbol="APP", name="Applovin"),
    Stock(symbol="KSU", name="Kansas City Southern"),
    Stock(symbol="BLL", name="Ball"),
    Stock(symbol="EPAM", name="EPAM"),
    Stock(symbol="LH", name="LabCorp"),
    Stock(symbol="TCOM", name="Trip.com"),
    Stock(symbol="TME", name="Tencent Music Entertainment"),
    Stock(symbol="ZBRA", name="Zebra Technologies"),
    Stock(symbol="GMAB", name="Genmab"),
    Stock(symbol="ZTO", name="ZTO Express"),
    Stock(symbol="ED", name="Consolidated Edison"),
    Stock(symbol="ZS", name="Zscaler"),
    Stock(symbol="U", name="Unity Software"),
    Stock(symbol="RYAAY", name="Ryanair Holdings"),
    Stock(symbol="ARE", name="Alecandria Real Estate Equities"),
    Stock(symbol="KEYS", name="Keysight Technologies"),
    Stock(symbol="HRL", name="Hormel Foods"),
    Stock(symbol="RCI", name="Rogers Communication"),
    Stock(symbol="CS", name="Credit Suisse"),
    Stock(symbol="ANET", name="Arista"),
    Stock(symbol="HES", name="HESS"),
    Stock(symbol="TAL", name="TAL Education"),
    Stock(symbol="WST", name="West Pharmaceutical"),
    Stock(symbol="O", name="Realty Income"),
    Stock(symbol="BKR", name="Baker Hughes"),
    Stock(symbol="NTRS", name="Northern Trust"),
    Stock(symbol="CAJ", name="Canon"),
    Stock(symbol="VRSN", name="VeriSign"),
    Stock(symbol="IP", name="international Paper Company"),
    Stock(symbol="FTV", name="Fortive"),
    Stock(symbol="EC", name="Ecopetrol"),
    Stock(symbol="RPRX", name="Royalty Pharma"),
    Stock(symbol="VMC", name="Vulcan Materials"),
    Stock(symbol="PKX", name="POSCO"),
    Stock(symbol="OXY", name="Occidental Petroleum"),
    Stock(symbol="IMO", name="Imperial Oil"),
    Stock(symbol="URI", name="United Rentals"),
    Stock(symbol="GWW", name="W.W. Grainger"),
    Stock(symbol="RNG", name="RingCentral"),
    Stock(symbol="MKC", name="McCormick & Company"),
    Stock(symbol="RCL", name="Royal Caribbean Group"),
    Stock(symbol="YNDX", name="Yandex"),
    Stock(symbol="CERN", name="Cerner"),
    Stock(symbol="ABC", name="AmerisourceBergn"),
    Stock(symbol="HUBS", name="HubSpot"),
    Stock(symbol="OKE", name="ONEOK"),
    Stock(symbol="FMS", name="Fresenius Medical Care"),
    Stock(symbol="UMC", name="United Microelectronics"),
    Stock(symbol="HIG", name="Hartford Financial Services Group"),
    Stock(symbol="TDOC", name="Teladoc Health"),
    Stock(symbol="CNHI", name="CHN Industrial"),
    Stock(symbol="CDW", name="CDW Corp"),
    Stock(symbol="WDC", name="Western Digital"),
    Stock(symbol="TLK", name="PT Telekommunikasi Indonesia"),
    Stock(symbol="FLT", name="FleetCor"),
    Stock(symbol="MLM", name="Martin Marietta Materials"),
    Stock(symbol="RF", name="Regions Financial"),
    Stock(symbol="PPL", name="PPL"),
    Stock(symbol="KEY", name="KeyCorp"),
    Stock(symbol="XP", name="XP Inc"),
    Stock(symbol="GIB", name="CGI"),
    Stock(symbol="TER", name="Teradyne"),
    Stock(symbol="STX", name="Seagate Technology"),
    Stock(symbol="DOV", name="Dover"),
    Stock(symbol="WPM", name="Wheaton Precious Metals Corp"),
    Stock(symbol="LNG", name="Cheniere Energy"),
    Stock(symbol="AEE", name="Ameren"),
    Stock(symbol="IX", name="Orix"),
    Stock(symbol="TTWO", name="Take-Two Interactive Software"),
    Stock(symbol="FTS", name="Fortis"),
    Stock(symbol="IAC", name="IAC"),
    Stock(symbol="XYL", name="Xylem"),
    Stock(symbol="CFG", name="Citizens Financial Group"),
    Stock(symbol="EXPD", name="Expeditors International of Washington"),
    Stock(symbol="EIX", name="Edison International"),
    Stock(symbol="QSR", name="Restaurant Brands"),
    Stock(symbol="ETR", name="Entergy"),
    Stock(symbol="NVCR", name="NovoCure"),
    Stock(symbol="CHD", name="Church & Dwight"),
    Stock(symbol="TSCO", name="Tractor Supply"),
    Stock(symbol="FUTU", name="Futu Holdings"),
    Stock(symbol="IR", name="Ingersoll Rand"),
    Stock(symbol="VTR", name="Ventas"),
    Stock(symbol="HPE", name="Hewlett Packard"),
    Stock(symbol="CVAC", name="CureVac"),
    Stock(symbol="GNRC", name="Generac Holdings"),
    Stock(symbol="MTB", name="M&T Bank"),
    Stock(symbol="FE", name="FirstEnergy"),
    Stock(symbol="HZNP", name="Horizon Therapeutics"),
    Stock(symbol="INVH", name="Invitation Homes"),
    Stock(symbol="QRVO", name="Qorvo"),
    Stock(symbol="TRU", name="TransUnion"),
    Stock(symbol="STNE", name="StoneCo"),
    Stock(symbol="AGR", name="Avangrid"),
    Stock(symbol="ALLY", name="Ally Financial"),
    Stock(symbol="PCG", name="Pacific Gas & Electric"),
    Stock(symbol="KB", name="KB Financial"),
    Stock(symbol="EXR", name="Extra Space Storage"),
    Stock(symbol="HAL", name="Haliburton"),
    Stock(symbol="CQP", name="Cheniere Energy Partners"),
    Stock(symbol="IT", name="Gartner"),
    Stock(symbol="WAT", name="Waters"),
    Stock(symbol="SPLK", name="Splunk"),
    Stock(symbol="PAYC", name="Paycom Software"),
    Stock(symbol="TXG", name="10x Genomics"),
    Stock(symbol="LYV", name="Live Nation Entertainment"),
    Stock(symbol="SHG", name="Shinhan Financial Group"),
    Stock(symbol="CINF", name="Cincinatti Financial Corp"),
    Stock(symbol="TRMB", name="Trimble"),
    Stock(symbol="TDY", name="Teledyne"),
    Stock(symbol="ALB", name="Albemarle"),
    Stock(symbol="TW", name="Tradeweb Markets"),
    Stock(symbol="ENPH", name="Enphase Energy"),
    Stock(symbol="COO", name="Cooper Companies"),
    Stock(symbol="ESS", name="Essex Property Trust"),
    Stock(symbol="SNN", name="Smith & Nephew"),
    Stock(symbol="HEI", name="Heico"),
    Stock(symbol="EXAS", name="Exact Sciences"),
    Stock(symbol="GPC", name="Genuine Parts"),
    Stock(symbol="UI", name="Ubiquiti"),
    Stock(symbol="SSNC", name="SS&C Technologies"),
    Stock(symbol="TFX", name="Teleflex"),
    Stock(symbol="DRI", name="Darden Restaurants"),
    Stock(symbol="SUI", name="Sun Communities"),
    Stock(symbol="AVTR", name="Avantor"),
    Stock(symbol="CE", name="Celanese"),
    Stock(symbol="AKAM", name="Akamai Technologies"),
    Stock(symbol="BR", name="Broadridge Financial Solutions"),
    Stock(symbol="J", name="Jacobs Engineering Group"),
    Stock(symbol="WMG", name="Warner Music Group"),
    Stock(symbol="INCY", name="Incyte"),
    Stock(symbol="VTRS", name="Viatris"),
    Stock(symbol="MAA", name="Mid-America Apartment Communities"),
    Stock(symbol="HTHT", name="Huazhu Group"),
    Stock(symbol="CLVT", name="Clarivate"),
    Stock(symbol="BXP", name="Boston Properties"),
    Stock(symbol="AVY", name="Avery Dennison"),
    Stock(symbol="CAG", name="ConAgra Brands"),
    Stock(symbol="RJF", name="Raymond James Financial"),
    Stock(symbol="AMCR", name="Amcor"),
    Stock(symbol="CMS", name="CMS Energy"),
    Stock(symbol="JBHT", name="J.B. Hunt Transport Services"),
    Stock(symbol="PEAK", name="Healthpeak Properties"),
    Stock(symbol="DVN", name="Devon Energy"),
    Stock(symbol="BIO", name="Bio-Rad Laboratories"),
    Stock(symbol="PODD", name="Insulet"),
    Stock(symbol="CTLT", name="Catalent"),
    Stock(symbol="PFG", name="principal Financial Group"),
    Stock(symbol="NVR", name="NVR"),
    Stock(symbol="PBA", name="Pembina Pipeline"),
    Stock(symbol="RLX", name="RLX Technology"),
    Stock(symbol="MKTX", name="MarketAxess"),
    Stock(symbol="OMC", name="Omnicom"),
    Stock(symbol="XM", name="Qualtrics International"),
    Stock(symbol="POOL", name="Pool Corp"),
    Stock(symbol="COUP", name="Coupa Software Inc"),
    Stock(symbol="BPY", name="Brookfield Property Partners"),
    Stock(symbol="AEM", name="Agnico Eagle Mines"),
    Stock(symbol="DRE", name="Duke Realty"),
    Stock(symbol="EDU", name="New Oriential Education & Technology"),
    Stock(symbol="LSXMB", name="Liberty Media"),
    Stock(symbol="BEN", name="Franklin Resources"),
    Stock(symbol="ON", name="ON Semiconductor"),
    Stock(symbol="EMN", name="Eastman Chemical"),
    Stock(symbol="ELAN", name="Elanco Animal Health"),
    Stock(symbol="NMR", name="Nomura Holdings"),
    Stock(symbol="CRL", name="Charlers River Laboratories"),
    Stock(symbol="AES", name="AES"),
    Stock(symbol="IEX", name="IDEX"),
    Stock(symbol="MKL", name="Markel"),
    Stock(symbol="ROL", name="Rollins"),
    Stock(symbol="VICI", name="VICI Properties"),
    Stock(symbol="ALNY", name="Alnylam Pharmaceuticals"),
    Stock(symbol="WPP", name="WPP"),
    Stock(symbol="ATUS", name="Atlice USA"),
    Stock(symbol="FTCH", name="Farfetch Limited"),
    Stock(symbol="TYL", name="Tyler Technologies"),
    Stock(symbol="XPO", name="XPO Logistics"),
    Stock(symbol="CVE", name="Cenovus Energy"),
    Stock(symbol="ELP", name="Paranaense de Energia"),
    Stock(symbol="STE", name="STERIS"),
    Stock(symbol="CAH", name="Cardinal Health"),
    Stock(symbol="PKI", name="PerkinElmer"),
    Stock(symbol="DISCA", name="Discovery"),
    Stock(symbol="ZEN", name="Zendesk"),
    Stock(symbol="PPD", name="PPD"),
    Stock(symbol="HOLX", name="Hologic"),
    Stock(symbol="PAGS", name="PagSeguro Digital"),
    Stock(symbol="HBAN", name="Huntington Bancshares"),
    Stock(symbol="AFRM", name="Affirm Holdings"),
    Stock(symbol="ACGL", name="Arch Capital Group"),
    Stock(symbol="TECH", name="Bio-Techne"),
    Stock(symbol="NLOK", name="NortonLifeLock"),
    Stock(symbol="BIP", name="Brookfield Infastructure Partners"),
    Stock(symbol="DGX", name="Quest Diagnostics"),
    Stock(symbol="SUZ", name="Suzano"),
    Stock(symbol="NWSA", name="News Corp"),
    Stock(symbol="VIPS", name="Vipshop Holdings"),
    Stock(symbol="BSY", name="Bently Systems"),
    Stock(symbol="CHKP", name="Check Point Software"),
    Stock(symbol="MPWR", name="Monolithic Power Systems"),
    Stock(symbol="PTC", name="PTC"),
    Stock(symbol="WAB", name="Westinghouse Air Brake Technologies"),
    Stock(symbol="WRK", name="Westrock"),
    Stock(symbol="ENTG", name="Entegris"),
    Stock(symbol="CG", name="Carlyle Group"),
    Stock(symbol="TXT", name="Textron"),
    Stock(symbol="LBTYA", name="Liberty Global"),
    Stock(symbol="HWM", name="Howmet Aerospace"),
    Stock(symbol="L", name="Loews"),
    Stock(symbol="LBTYK", name="Liberty Global"),
    Stock(symbol="WHR", name="Whirlpool"),
    Stock(symbol="FMC", name="FMC Corp"),
    Stock(symbol="DISCK", name="Discovery"),
    Stock(symbol="WYNN", name="Wynn Resorts"),
    Stock(symbol="DAC", name="Danaos Corp"),
    Stock(symbol="KIRK", name="Kirkland's"),
    Stock(symbol="AMTX", name="Aemetis Inc"),
    Stock(symbol="BGFV", name="Big 5"),
    Stock(symbol="GTIM", name="Good Times Rest"),
    Stock(symbol="LOB", name="Live Oak Bansch"),
    Stock(symbol="KEP", name="Korea Electric power"),
    Stock(symbol="MHK", name="Mohawk Industries"),
    Stock(symbol="CNP", name="CenterPoint Energy"),
    Stock(symbol="MOH", name="Molina Healthcare"),
    Stock(symbol="WIX", name="Wix.com"),
    Stock(symbol="LSXMA", name="Liberty Media"),
    Stock(symbol="DT", name="Dynatrace"),
    Stock(symbol="GDRX", name="GoodRx"),
    Stock(symbol="EMB", name="iShares JP Morgan USD Emerging Markets Bond ETF"),
    Stock(symbol="AMJ", name="JPMorgan Ultra-Short Municipal Income ETF"),
    Stock(symbol="JPST", name="JPMorgan Ultra-Short Income ETF"),
    Stock(symbol="WRBY", name="Warby Parker"),
    Stock(symbol="OLPX", name="Olaplex Holdings"),
    Stock(symbol="MEKA", name="MELI Kaszek Pioneer"),
    Stock(symbol="HCVI", name="Hennesy Capital Investment VI"),
    Stock(symbol="AMPL", name="Amplitude"),
    Stock(symbol="PRBM", name="Parabellum Acquisition"),
    Stock(symbol="CWAN", name="Clearwater Analytics"),
    Stock(symbol="SOVO", name="Sovos Brands"),
    Stock(symbol="BRLT", name="Brilliant Earth Group"),
    Stock(symbol="ARBK", name="Argo Blockchain"),
    Stock(symbol="ESMT", name="EngageSmart"),
    Stock(symbol="STER", name="Sterling Check"),
    Stock(symbol="FRSH", name="Freshworks"),
    Stock(symbol="TOST", name="Toast"),
    Stock(symbol="TYRA", name="Tyra Biosciences"),
    Stock(symbol="ONON", name="On Holding"),
    Stock(symbol="DH", name="Definitive Healthcare"),
    Stock(symbol="DICE", name="DICE Therapeutics"),
    Stock(symbol="BROS", name="Dutch Bros"),
    Stock(symbol="SRAD", name="Sportradar"),
    Stock(symbol="SQL", name="SeqLL"),
    Stock(symbol="RNXT", name="RenovoRx"),
    Stock(symbol="DRMA", name="Dermata Therapeutics"),
    Stock(symbol="DATS", name="DatChat"),
    Stock(symbol="WEBR", name="Weber"),
    Stock(symbol="DOLE", name="Dole"),
    Stock(symbol="OMGA", name="Omega Therapeutics"),
    Stock(symbol="COOK", name="Traeger"),
    Stock(symbol="ICVX", name="Icosavax"),]


    for stock in all_stocks:
        db.session.add(stock)

    db.session.commit()


def undo_stocks():
    db.session.execute('TRUNCATE stocks RESTART IDENTITY CASCADE;')
    db.session.commit()
    