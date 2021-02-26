import React from "react";
import Table from "../../components/table";
import RightPanel from "../../components/right-panel";
import {IData} from '../../models/ISampleData'
import { sample_data } from "../../assets/sample_data";
import classes from './index.module.css'

export interface IHomeProps {}

const HomeView: React.FC<IHomeProps> = () => {
  const [right_panel_row_index, setRightPanelRowIndex] = React.useState<number | undefined>(
    undefined
  );
  const [data, setData] = React.useState<IData[]>(sample_data.data)

  const handleActiveItemChange = (index: number) => {
    setRightPanelRowIndex(index);
  };

  const handleNoActionNeeded = (right_panel_row_index:number) => () => {
    let newData = data.slice()
    const currentDetailObject = newData[right_panel_row_index].details.find(detail => detail.title === 'Aksiyon')
    if(currentDetailObject) currentDetailObject.value = "Aksiyon Gerekmiyor"
    setData(newData)
  }

  const handleActionChanged = (right_panel_row_index:number) => (action_dialog_action_value:string) => {
    let newData = data.slice()
    const currentDetailObject = newData[right_panel_row_index].details.find(detail => detail.title === 'Aksiyon')
    if(currentDetailObject) currentDetailObject.value = action_dialog_action_value
    setData(newData)
  }

  return (
    <main className={classes.home}>
      <Table
        className={classes.homeTable}
        tableData={data}
        onActiveItemChanged={handleActiveItemChange}
      />
      {right_panel_row_index !== undefined && (
        <RightPanel
          className={classes.homeRightPanel}
          rightPanelData={data[right_panel_row_index]}
          handleNoActionNeeded={handleNoActionNeeded(right_panel_row_index)}
          handleActionChanged={handleActionChanged(right_panel_row_index)}
        />
      )}
    </main>
  );
};

export default HomeView;
