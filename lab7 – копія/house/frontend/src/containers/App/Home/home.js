const Home = () => {
  const [houses, setHouses] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/", {
          params: {
            showMore: showAll,  // Передаємо параметр showMore у запит
          }
        });
        setHouses(response.data);
      } catch (error) {
        console.error("Error loading houses: ", error);
      }
    };

    fetchData();
  }, [showAll]);  // Викликаємо fetchData щоразу при зміні showAll

  const displayedHouses = houses;

  return (
    <div>
      <SectionWrapper>
        <StyledText>
          <h1>Explore Stylish Homes & Designs</h1>
          <p>
            Discover our stunning selection of houses and home designs that
            cater to all styles and preferences...
          </p>
          <StyledButton size="large" onClick={() => navigate('/catalog')}>
              Catalog
          </StyledButton>
        </StyledText>
        <ImageWrapper>
          <img src={ModelPicture} alt="A stylish home model" />
        </ImageWrapper>
      </SectionWrapper>
      
      <CardsContainer>
        {houses.length > 0 ? (
          displayedHouses.map((house) => (
            <CardItem
              key={house.id}
              title={house.title}
              text={house.description}
              imageSrc={`http://127.0.0.1:8000${house.image}`}
              price={house.price}
              id={house.id}
              type={house.type}
              onDelete={() => console.log("Delete action for", house.id)}
              onClick={() => console.log("Card clicked", house.id)}
            />
          ))
        ) : (
          <p>No houses found.</p>
        )}
      </CardsContainer>

      {/* Кнопка "Show More" тепер під картками */}
      <div style={{ textAlign: 'center', marginTop: '20px', color: "black" }}>
        <StyledButton size="large" onClick={() => setShowAll(prev => !prev)} style={{ color: 'black' }}>
          {showAll ? "Show Less" : "Show More"}
        </StyledButton>
      </div>
    </div>
  );
};
