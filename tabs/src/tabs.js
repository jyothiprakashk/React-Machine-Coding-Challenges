import React,{useState} from "react";
import "./App.css";

export const Tabs = (props) => {
  const { defaultSelect, tabsData } = props;
  const [currentTab, setCurrentTab] = useState(defaultSelect);

  const RenderTabs = () => {
    return (
      <React.Fragment>
        {tabsData.map((tab) => {
          const currentItem = currentTab === tab.id;
          return (
            <div
              className={`singleTab ${currentItem ? "active" : "inactive"}`}
              style={{ backgroundColor: currentItem ? "active" : "inactive" }}
              onClick={() => setCurrentTab(tab.id)}
              key={tab.id}
            >
              {tab.name}
            </div>
          );
        })}
      </React.Fragment>
    );
  };

  const RenderContent = () => {
    return (
      <React.Fragment>
        {tabsData.map((tab) => {
          const currentItem = currentTab === tab.id;
          return <div key={tab.id}>{currentItem && tab.content}</div>;
        })}
      </React.Fragment>
    );
  };
  return (
    <div>
      <div className="tabsConatiner">{RenderTabs()}</div>
      <div className="tabsContent">{RenderContent()}</div>
    </div>
  );
};
