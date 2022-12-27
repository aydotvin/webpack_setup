import Card from "react-bootstrap/Card";
import styles from "./Product.module.scss";

const Product = ({ product }) => {
	const { id, title, description } = product;
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img className={`${styles.cardImage}`} src={product.thumbnail} />
			<Card.Body>
				<Card.Title>
					{id} - {title}
				</Card.Title>
				<Card.Text>{description}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Product;
