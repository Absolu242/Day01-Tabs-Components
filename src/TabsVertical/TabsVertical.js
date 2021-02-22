import React, { useState } from "react"
import "./TabsVertical.css"
import img from "./image.jpg"

const data = {
  tab1: "first",
  tab2: "second",
  tab3: "third",
}

export default function TabsVertical() {
  const [isTab, setTab] = useState(data.tab1)
  return (
    <>
      <div className="tabsVertical">
        <div className="tabsVertical__container">
          <div className="tabsVertical__head">
            <TabsTab tab={isTab} changeTab={setTab} />
          </div>

          <div className="tabsVertical__content">
            {" "}
            <TabsContent tab={isTab} />
          </div>
        </div>
      </div>
    </>
  )
}

const TabsTab = ({ tab, changeTab }) => {
  return (
    <>
      <button
        onClick={() => changeTab(data.tab1)}
        className={
          tab === data.tab1 ? "tabsVertical__btn active" : "tabsVertical__btn"
        }
      >
        FIRST
      </button>
      <button
        onClick={() => changeTab(data.tab2)}
        className={
          tab === data.tab2
            ? "tabsVertical__btn active"
            : "tabsVertical__btn second"
        }
      >
        SECOND
      </button>
      <button
        onClick={() => changeTab(data.tab3)}
        className={
          tab === data.tab3 ? "tabsVertical__btn active" : "tabsVertical__btn "
        }
      >
        THIRD
      </button>
    </>
  )
}

const TabsContent = ({ tab }) => {
  switch (tab) {
    case data.tab1:
      return (
        <>
          <div className="tabsVertical__content--left">
            <span className="tag">EXPLORERS</span>
            <h1>Waiting For The Sun</h1>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              suscipit neque illo eum excepturi ea sed saepe quasi dolores
            </p>
            <button className="more">READ MORE</button>
          </div>
          <img src={img} alt="cool" />
        </>
      )
      break
    case data.tab2:
      return <>Tab 2</>
      break
    case data.tab3:
      return <>Tab 3</>

    default:
      break
  }
}
