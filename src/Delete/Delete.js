const products = [
    {   id:"1",
        name:"IS iStock",
        img:"https://i.ibb.co/pKsRP0k/Generic-red-SUV-on-a-white-background-side-view.jpg",
        description:"Red Car Stock Photos, Pictures & Royalty-Free Images - iStock",
        details:"There are costs and benefits to car use. The costs to the individual include acquiring the vehicle, interest payments (if the car is financed), repairs and maintenance, fuel, depreciation, driving time, parking fees, taxes, and insurance.[11] The costs to society include maintaining roads, land use, road congestion, air pollution, public health, healthcare, and disposing of the vehicle at the end of its life. Traffic collisions are the largest cause of injury-related deaths worldwide.",
        price:"$12000",
        weight:"2400KG",
        availableColor:"Black,Red,White"
    },
    {   
        id:"2",
        name:"Jaguar",
        img:"https://i.ibb.co/HLZtLRw/p2.jpg",
        description:"Jaguar E-PACE | Compact Performance SUV | Jaguar",
        details:"A car is a wheeled motor vehicle used for transportation. Most definitions of cars say that they run primarily on roads, seat one-to-eight people, have four wheels and mainly transport people rather than goods. Cars came into global use during the 20th century, and developed economies depend on them. ",
        price:"$11600",
        weight:"2300KG",
        availableColor:"Black,Red,White"
    },
    {   
        id:"3",
        name:"Luxury",
        img:"https://i.ibb.co/wwvPvgh/p3.jpg",
        description:"Jaguar J-Pace mule tests diesel-electric powertrain | Autocar",
        details:"Buy Cars Winnipeg. Free Results 24/7 For You! Discover us now! Easy Acces To Information. Simple in use. Multiple sources combined. All the Answers. Fast and trusted. Types: Information, Combined Web Results, Easy & Fast, 99% Match.",
        price:"$10000",
        weight:"1800KG",
        availableColor:"Red,White"
    },
    {   
        id:"4",
        name:"Estimacao",
        img:"https://i.ibb.co/Sfz3fSJ/p4.jpg",
        description:"Natural Gas - estimacao",
        details:"We Make Finding The Perfect Buick Easy. Check Out Our Inventory & Book A Test Drive! Huge Selection Of Buick Cars And SUVs. Call Today To Book Your Test Drive! Dedicated Sales Staff. After Sale Coverage. Committed To Excellence. Great Customer Service. ",
        price:"$10000",
        weight:"1700KG",
        availableColor:"Black,Red"
    },
    {   
        id:"5",
        name:"CarDekho",
        img:"https://i.ibb.co/9qcTyxH/p5.jpg",
        description:"amborghini Cars Price in India, Lamborghini Car Models 2021.",
        details:"Search Sfo Car Rental. Search Sfo Car Rental, Top Results From Trusted Resources. Explore the Best Info Now. 100+ Unique Results. Find All Info You Want. Quick Answers. Useful & Relevant. Find in Seconds. Services: Secure Search.",
        price:"$8000",
        weight:"1500KG",
        availableColor:"Black,Red,White,Yellow"
    },
    {   
        id:"6",
        name:"WIRED",
        img:"https://i.ibb.co/4YNzpd1/p6.jpg",
        description:"JD Power Says Korean Cars Beat US and Europe in Quality | WIRED",
        details:"Cars have controls for driving, parking, passenger comfort, and a variety of lights. Over the decades, additional features and controls have been added to vehicles, making them progressively more complex. These include rear-reversing cameras, air conditioning, navigation systems, and in-car entertainment. Most cars in use in the early 2020s are propelled by an internal combustion engine, fueled by the combustion of fossil fuels",
        price:"$9000",
        weight:"1200KG",
        availableColor:"Red,White"
    },
    {   
        id:"7",
        name:"CarWale",
        img:"https://i.ibb.co/kJQVhk6/p7.jpg",
        description:"Volvo S60 Price - Images, Colours & Reviews - CarWale",
        details:" Electric cars, which were invented early in the history of the car, became commercially available in the 2000s and are predicted to cost less to buy than gasoline cars before 2025.[7][8] The transition from fossil fuels to electric cars features prominently in most climate change mitigation scenarios,[9] such as Project Drawdowns 100 actionable solutions for climate change",
        price:"$7000",
        weight:"1800KG",
        availableColor:"Black,Red,White"
    },
    {   
        id:"8",
        name:"ZigWheels",
        img:"https://i.ibb.co/6Rf3ssv/p8.jpg",
        description:"Volvo XC90 Price in India, Images, Reviews & Specs",
        details:"Search Cheap Car Insurance In Ga, Top Information From Trusted Internet Sources. Cheap Car Insurance In Ga, Get Expert Advice and Curated Content on Top10quest. Explore the Best Info Now. 100+ Unique Results. Find All Info You Want. Quick Answers.Vlad and Niki play with toy cars - Collection video for kidsPlease Subscribe!Vlad and Niki Merch.",
        price:"$1900",
        weight:"2900KG",
        availableColor:"Red,White"
    },
    {   
        id:"9",
        name:"TLX",
        img:"https://i.ibb.co/6vQM1R0/p9.jpg",
        description:"Life with the Ford F-150: What Do Owners Really",
        details:"the TLX compact luxury sedan has impressive dynamics and a strong turbocharged 2.0-liter engine, but it longs for more. The TLX Type S is just that, with a turbocharged 3.0-liter V-6 and a stack of goodies in a refined performance package that doesn’t break the bank. Including destination, the sedan starts at",
        price:"$14000",
        weight:"2000KG",
        availableColor:"Black,Red,White"
    },
    {   
        id:"10",
        name:"Hindustan",
        img:"https://i.ibb.co/L989j0N/p10.jpg",
        description:"Honda Cars India stops production at its Greater Noida facility",
        details:"Download the perfect red car pictures. Find over 100+ of the best free red car images.Find red car stock images in HD and millions of other royalty-free stock photos, illustrations and vectors in the Shutterstock collection.Search from 209828 Red Car stock photos, pictures and royalty-free images from iStock. Find high-quality stock photos that you won.",
        price:"$12000",
        weight:"24000KG",
        availableColor:"Black,Red,White"
    },
    {   
        id:"11",
        name:"Nikkei Asia",
        img:"https://i.ibb.co/ypgrFJd/front-view-of-fast-moving-red-generic-car-motion-blur-3-D-car-of-my-own-design.jpg",
        description:" where's my car? Production cuts lead to yearlong waits - Nikkei Asia",
        details:"We offer a full range of garage services to vehicle owners in Tucson. Our professionals know how to handle a wide range of car services. Whether you drive a passenger car or medium sized truck or SUV, our mechanics strive to ensure that your vehicle will be performing at its best before leaving our car shop.",
        price:"$12000",
        weight:"24000KG",
        availableColor:"Black,Red,White"
    },
    {   
        id:"12",
        name:"J.D. Power",
        img:"https://i.ibb.co/XCXWYyJ/p12.jpg",
        description:"2020 Honda Civic Hatchback Review | J.D. Power",
        details:"This car is a wheeled motor vehicle used for transportation. Most definitions of cars say that they run primarily on roads, seat one-to-eight people, have four wheels and mainly transport people rather than goods.Cars have controls for driving, parking, passenger comfort, and a variety of lights.",
        price:"$12000",
        weight:"24000KG",
        availableColor:"Black,Red,White"
    },
    
    
    {   
        id:"13",
        name:"CIVIC",
        img:"https://i.ibb.co/kHPTTMp/Red-Generic-sedan-car-isolated-on-white-background-3-D-illustration.jpg",
        description:"Honda Civic RS Turbo Modulo launched in Philippines",
        details:"Download the perfect red car pictures. Find over 100+ of the best free red car images.Find red car stock images in HD and millions of other royalty-free stock photos, illustrations and vectors in the Shutterstock collection.Search from 209828 Red Car stock photos, pictures and royalty-free images from iStock. Find high-quality stock photos that you won.",
        price:"$12000",
        weight:"24000KG",
        availableColor:"Red,White"
    },
    {   
        id:"14",
        name:"LEXIS",
        img:"https://i.ibb.co/Jtcnb5Y/p14.jpg",
        description:"You Need to Know About Turbo 1.5 Relaunch.",
        details:"With the amount of money we spend on the payments, maintenance, and repair of our cars, you'd think we'd have a better relationship with our vehicle.Rent A Car Miami, Top Results From Trusted Resources. Search Rent A Car Miami, Get Expert Advice and Curated Content on Top10quest.",
        price:"$13000",
        weight:"2200KG",
        availableColor:"Red,White"
    },
   
]