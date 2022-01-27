import { categories } from "../../data";
import {Container} from "./styles";
import {CategoryItem} from "./CategoryItem/CategoryItem";

const Categories = () => {
  return(
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export {Categories};