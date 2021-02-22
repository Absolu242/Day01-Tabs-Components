import React, { useState } from "react"
import "./tabsHorizontal.css"
import img from "./image.jpg"

const data = {
  tab1: "first",
  tab2: "second",
  tab3: "third",
  tab4: "fourth",
}

export default function TabsHorizontal() {
  const [isTab, setTab] = useState(data.tab1)
  return (
    <>
      <div className="tabsHorizontal">
        <div className="tabsHorizontal__container">
          <div className="tabsHorizontal__head">
            <TabsTab tab={isTab} changeTab={setTab} />
          </div>

          <div className="tabsHorizontal__content">
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
          tab === data.tab1
            ? "tabsHorizontal__btn active"
            : "tabsHorizontal__btn"
        }
      >
        {data.tab1}
      </button>
      <button
        onClick={() => changeTab(data.tab2)}
        className={
          tab === data.tab2
            ? "tabsHorizontal__btn active"
            : "tabsHorizontal__btn"
        }
      >
        {data.tab2}
      </button>
      <button
        onClick={() => changeTab(data.tab3)}
        className={
          tab === data.tab3
            ? "tabsHorizontal__btn active"
            : "tabsHorizontal__btn "
        }
      >
        {data.tab3}
      </button>
      <button
        onClick={() => changeTab(data.tab4)}
        className={
          tab === data.tab4
            ? "tabsHorizontal__btn active"
            : "tabsHorizontal__btn last"
        }
      >
        {data.tab4}
      </button>
    </>
  )
}

const TabsContent = ({ tab }) => {
  switch (tab) {
    case data.tab1:
      return (
        <>
          <div className="tabsHorizontal__content--left">
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
    case data.tab4:
      return <>Tab 4</>

    default:
      break
  }
}
