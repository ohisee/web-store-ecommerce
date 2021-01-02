/**
 * @fileoverview home page component 
 */
import React from "react";
// import styles from "./homepage.module.scss";
import Diretory from "../../components/directory/directory.component";
import HomePageContainer from "./homepage.styles";

const HomePage: React.FC = () => {
  return (
    // <div className={styles["homepage"]}>
    //   <Diretory />
    // </div>
    <HomePageContainer>
      <Diretory />
    </HomePageContainer>
  );
};

export default HomePage;
