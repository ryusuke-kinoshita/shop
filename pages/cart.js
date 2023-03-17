import React, { useState } from "react";
import Footer from "../components/Footer";

import Navbar from "../components/Navbar";

function Cart() {
  // アイテムの初期状態をセットします
  const [items, setItems] = useState([
    {
      id: 1,
      name: "カーディガン",
      price: 5000,
      quantity: 0,
    },
    {
      id: 2,
      name: "ワンピース",
      price: 8000,
      quantity: 0,
    },
  ]);

  // 合計金額を計算する関数を定義します
  const getTotalPrice = () => {
    let totalPrice = 0;
    for (let i = 0; i < items.length; i++) {
      totalPrice += items[i].price * items[i].quantity;
    }

    return totalPrice;
  };

  // 数量を増やす関数を定義します
  const incrementItemQuantity = (index) => {
    // アイテム配列をコピーして新しい商品の数量を増やします
    const newItems = [...items];
    newItems[index].quantity++;
    setItems(newItems);
  };

  // 数量を減らす関数を定義します
  const decrementItemQuantity = (index) => {
    // 商品配列をコピーして商品の数量を減らします
    const newItems = [...items];
    if (newItems[index].quantity > 1) {
      newItems[index].quantity--;
      setItems(newItems); // 新しいアイテム配列で items ステートを更新
    }
  };

  // アイテム配列から単一のカートアイテムを描画するヘルパー関数を定義します
  const renderCartItem = (item, index) => {
    return (
      <div key={item.id}>
        <h3>{item.name}</h3>
        <img src={item}>{}</img>
        <p>数量: {item.quantity}</p>
        <p>値段: ¥{item.price.toLocaleString()}</p>
        <button
          className="border-4 border-gray-400"
          y
          onClick={() => incrementItemQuantity(index)}
        >
          +
        </button>
        <button
          className="border-4 border-gray-400"
          onClick={() => decrementItemQuantity(index)}
        >
          -
        </button>
      </div>
    );
  };

  // カート内の商品アイテムを全て描画します
  const renderCartItems = () => {
    return items.map((item, index) => {
      return renderCartItem(item, index);
    });
  };

  // カートの合計金額と注文ボタンを描画します
  return (
    <>
      <Navbar />

      <div>
        <h2 className="flex md:absolute text-center justify-center items-center">
          Shopping cart
        </h2>
        <div className="block gap-3 text-center text-3xl bg-inherit">
          {renderCartItems()}
        </div>
        <p className="text-4xl hover:underline">
          Total Price: ¥{getTotalPrice().toLocaleString()}
        </p>
        <button className="border-4">order</button>
      </div>

      <Footer />
    </>
  );
}

export default Cart;
