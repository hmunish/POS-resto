import { FaPen } from "react-icons/fa";

const ManageProductItemCard = ({
  dataId,
  category,
  img,
  name,
  price,
  stock,
}) => (
  <div className="item__card" data-id={dataId} data-category={category}>
    <img src={img} alt="Dish" />
    <p>{name}</p>
    <ul>
      <li>
        $
        {price}
      </li>
      <li>
        {stock}
        {' '}
        Bowls
      </li>
    </ul>
    <button className="edit__item" type="button">
      <FaPen />
      {' '}
      Edit dish
    </button>
  </div>
);

export default ManageProductItemCard;
