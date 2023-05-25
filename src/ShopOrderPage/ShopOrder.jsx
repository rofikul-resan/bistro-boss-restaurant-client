import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useParams } from "react-router-dom";
import PageHeader from "../Components/PageHeader";
import bgImg from "../assets/shop/banner2.jpg";
import { useState } from "react";
import TabContener from "./TabContener";
const ShopOrder = () => {
  const { title } = useParams();
  const tabArr = [
    "salad",
    "drinks",
    "dessert",
    "pizza",
    "soup",
    "popular",
    "offered",
  ];
  const defaultIndex = tabArr.indexOf(title);
  console.log(defaultIndex);
  const [tabIndex, setTabIndex] = useState(defaultIndex);
  console.log(title);
  return (
    <div>
      <PageHeader title={"our Shop"} bg={bgImg} />
      <div className=" my-24">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            {tabArr.map((tabTitle, i) => (
              <Tab key={i}>{tabTitle}</Tab>
            ))}
          </TabList>

          {tabArr.map((tabTitle, i) => (
            <TabPanel key={i}>
              <TabContener title={tabTitle} />
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default ShopOrder;
