import { useContext, useEffect } from "react";
import { Cart } from "../../components/organisms/Cart";
import { AuthContext } from "../../components/contexts/AuthContext";
import { LoadingAllPage } from "../../components/atoms/Loading";

export const metadata = {
  title: "Technology",
  description: "Generated by create next app",
};
const CartPage = () => {
  const { load, setLoad } = useContext(AuthContext);
  useEffect(() => {
    setLoad(true);
  }, []);
  return (
    <>
      <LoadingAllPage isOpen={load} setIsOpen={setLoad} />
      <div>
        <Cart />
      </div>
    </>
  );
};
export default CartPage;