import styled from "styled-components";
import Button from "./Button";

const Card = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  width: 28rem;
  height: 40rem;
  box-shadow: 0.65rem 0.65rem 0 var(--color-primary-7);
  border-radius: 0.8rem;
  overflow: hidden;
  border: 0.5rem solid;
`;

const ImgContainer = styled.div`
  overflow: hidden;
  height: 28rem;
`;

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  min-height: 100%;
`;

const Name = styled.span`
  color: var(--color-primary-6);
  font-family: "Roboto Mono", serif;
  font-size: 2rem;
  text-align: center;
`;

const Price = styled.span`
  color: var(--color-primary-8);
  font-family: "Roboto Mono", serif;
  font-size: 2rem;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1rem 2rem;
`;

function ProductCard() {
  return (
    <Card>
      <ImgContainer>
        <Img src="monstera-albo.png" />
      </ImgContainer>
      <Name>Monstera Albo</Name>
      <Price>$100.00</Price>
      <ButtonGroup>
        <Button>View Details</Button>
        <Button>Add to Cart</Button>
      </ButtonGroup>
    </Card>
  );
}

export default ProductCard;
