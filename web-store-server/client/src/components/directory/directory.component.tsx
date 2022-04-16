/**
 * @fileoverview directory component 
 */
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import styles from "./directory.module.scss";
import MenuItem from "../menu-item/menu-item.component";
import { id } from "../../utils/utilities";
import { RootState } from "../../redux/root-state";

interface Section {
  title: string,
  imageUrl: string,
  id: number,
  linkUrl: string,
  size?: string;
}
interface DirectoryProps {
  sections: Section[]
}
const Directory: React.FC<DirectoryProps> = ({ sections }) => {
  return (
    <div className={styles["directory-menu"]}>
      {
        sections.map(({ ...sectionProps }) =>
          <MenuItem
            key={id()}
            {...{ ...sectionProps, subtitle: "SHOW NOW" }}
          />)
      }
    </div>
  );
}

const mapStateToProps = createStructuredSelector<RootState, DirectoryProps>({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
