import React from "react";

const style = {
  text: { textAlign: "center" },
  yardImage: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "20%",
  },
  equipmentImage: { width: "300px" },
  list: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  equipment: { margin: "20px" },
};

function App() {
  return (
    <div>
      <div>
        <h1 style={style.text}>Heavy Equipment Trader</h1>

        <img
          src="https://previews.123rf.com/images/kovacevic/kovacevic1302/kovacevic130200009/17794615-under-construction-sign-with-helmet-and-heavy-machine.jpg"
          alt="Shop Logo"
          style={style.yardImage}
        />
        <h4 style={style.text}>
          Your Destination for all your Heavy Equipment needs.
        </h4>
      </div>
      <div style={style.list}>
        <div style={style.equipment}>
          <img
            src="https://www.constructionequipment.com/sites/ce/files/styles/large/public/Volvo-L180H-Bucketful.gif?itok=Rcxl2_Zp"
            alt="Wheel loader"
            style={style.equipmentImage}
          />
          <p style={style.text}>Wheel Loader Rental</p>
          <p style={style.text}>70 KD / Day</p>
        </div>
        <div style={style.equipment}>
          <img
            src="https://www.constructionequipment.com/sites/ce/files/Caterpillar-140-motor-grader.png"
            alt="Grader"
            style={style.equipmentImage}
          />
          <p style={style.text}>Grader Rental</p>
          <p style={style.text}>100 KD / Day</p>
        </div>
        <div style={style.equipment}>
          <img
            src="https://media.stokker.com/prod/l/982/144736982"
            alt="Skid Steer"
            style={style.equipmentImage}
          />
          <p style={style.text}>Skid Steer Rental</p>
          <p style={style.text}>40 KD / Day</p>
        </div>
      </div>
    </div>
  );
}

export default App;
