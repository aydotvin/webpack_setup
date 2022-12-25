import styles from "./Product.module.scss";

const Product = ({ product }) => {
	const { id, title, description } = product;
	return (
		<div className="col-md-4 pt-3">
			<div className="card h-100">
				<div className="card-body">
					<img className={`card-img-top ${styles.cardImage}`} src={product.thumbnail} alt={product.title} />
					<h2 className="card-title mt-2">{id} - {title}</h2>
					<p className="card-text mt-2">{description}</p>
				</div>
			</div>
		</div>
	);
};

export default Product;