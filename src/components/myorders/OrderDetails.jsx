import React from "react";

const OrderDetails = () => {
  return (
    <section className="orderDetails">
      <main>
        <h1>Order Details</h1>
        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address</b>
            {"xyz 89 tutu-87 sjkl"}
          </p>
        </div>

        <div>
          <h1>Contact</h1>
          <p>
            <b>Name</b>
            {"Aman"}
          </p>
          <p>
            <b>Phone</b>
            {3987745156}
          </p>
        </div>

        <div>
          <h1>Status</h1>
          <p>
            <b>Order status</b>
            {"Processing"}
          </p>
          <p>
            <b>Placed At</b>
            {"23-04-2022"}
          </p>
          <p>
            <b>Delivered At</b>
            {"23-04-2022"}
          </p>
        </div>

        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment Method</b>
            {"Online"}
          </p>
          <p>
            <b>Payment Reference</b>
            {"fjkjskfjkfj"}
          </p>
          <p>
            <b>Paid At</b>
            {"23-04-2022"}
          </p>
        </div>

        <div>
          <h1>Amount</h1>
          <p>
            <b>Items total</b>₹{214}
          </p>

          <p>
            <b>Shipping Charges</b>₹{200}
          </p>
          <p>
            <b>Tax Charges</b>₹{150}
          </p>
          <p>
            <b>Total Amout </b>₹{214 + 200 + 150}
          </p>
        </div>

        <article>
          <h1>Ordered Items</h1>
          <div>
            <h4>Cheese Burger</h4>
            <div>
              <span>{12}</span> X <span>{4}</span>
            </div>
          </div>
          <div>
            <h4>Veg Cheese Burger</h4>
            <div>
              <span>{5}</span> X <span>{2}</span>
            </div>
          </div>
          <div>
            <h4>Burger with french fries</h4>
            <div>
              <span>{10}</span> X <span>{3}</span>
            </div>
          </div>
          <div>
            <h4
              style={{
                fontWeight: 800,
              }}
            >
              Sub total
            </h4>
            <div
              style={{
                fontWeight: 800,
              }}
            >
              ₹{2000}
            </div>
          </div>
        </article>
      </main>
    </section>
  );
};

export default OrderDetails;
