import Item from './components/Item'
import Header from './components/Header';
import './App.css';

import Accessories from './assets/Desktop-Accessories.jpg';
import ModelS from './assets/Desktop-ModelS.jpeg';
import Model3 from './assets/Desktop-Model3.jpeg';
import ModelX from './assets/Desktop-ModelX.jpeg';
import ModelY from './assets/Desktop-ModelY.jpeg';
import SolarRoof from './assets/Desktop-SolarRoof.jpeg';
import SolarPanels from './assets/Desktop-SolarPanels.jpeg';

function App() {
  return (
    <div className="App">

    <Header/>
    <div className="app__itemsContainer">
    
    <Item
    title='Model 3'
    desc='Order Online for Touchless Delivery'
    descLink='https://www.tesla.com/support/taking-delivery?redirect=no'
    backgroundImg= {Model3}
    leftBtnTxt=' CUSTOM ORDER'
    leftBtnLink='https://www.tesla.com/model3/design#overview'
    righBtnTxt='EXISTING INVENTORY'
    righBtnLink='https://www.tesla.com/inventory/new/m3'
    twoButtons ='true'  
    first
  
    />

    <Item
    title='Model Y'
    desc='Order Online for Touchless Delivery'
    descLink='https://www.tesla.com/support/taking-delivery?redirect=no'
    backgroundImg= {ModelY}
    leftBtnTxt=' CUSTOM ORDER'
    leftBtnLink='https://www.tesla.com/modely/design#overview'
    righBtnTxt='EXISTING INVENTORY'
    righBtnLink='https://www.tesla.com/inventory/new/my'
    twoButtons='true'
    />

    <Item
    title='Model S'
    desc='Order Online for Touchless Delivery'
    descLink='https://www.tesla.com/support/taking-delivery?redirect=no'
    backgroundImg= {ModelS}
    leftBtnTxt=' CUSTOM ORDER'
    leftBtnLink='https://www.tesla.com/models/design#overview'
    righBtnTxt='EXISTING INVENTORY'
    righBtnLink='https://www.tesla.com/inventory/new/ms'
    twoButtons='true'
    />

    <Item
    title='Model X'
    desc='Order Online for Touchless Delivery'
    descLink='https://www.tesla.com/support/taking-delivery?redirect=no'
    backgroundImg= {ModelX}
    leftBtnTxt=' CUSTOM ORDER'
    leftBtnLink='https://www.tesla.com/modelx/design#overview'
    righBtnTxt='EXISTING INVENTORY'
    righBtnLink='https://www.tesla.com/inventory/new/mx'
    twoButtons='true'
    />

    <Item
    title='Solar Panels'
    desc='Lowest Cost Solar Panels in America'    
    backgroundImg= {SolarPanels}
    leftBtnTxt=' ORDER NOW'
    leftBtnLink='https://www.tesla.com/energy/design'
    righBtnTxt='LEARN MORE'
    righBtnLink='https://www.tesla.com/solarpanels'
    twoButtons='true'
    />

    <Item
    title='Solar Roof'
    desc='Produce Clean Energy From Your Roof'    
    backgroundImg= {SolarRoof}
    leftBtnTxt=' ORDER NOW'
    leftBtnLink='https://www.tesla.com/energy/design'
    righBtnTxt='LEARN MORE'
    righBtnLink='https://www.tesla.com/solarroof'
    twoButtons='true'
    />

    <Item
    title='Accessories'
    // desc='Produce Clean Energy From Your Roof'    
    backgroundImg={Accessories}
    leftBtnTxt=' ORDER NOW'
    leftBtnLink='https://shop.tesla.com/'
    righBtnTxt='LEARN MORE'
    righBtnLink='https://www.tesla.com/solarroof'
  
    />

    </div>

    </div>
  );
}

export default App;
