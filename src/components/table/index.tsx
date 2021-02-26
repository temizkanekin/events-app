import React from "react";
import {IDetails, IData} from "../../models/ISampleData"
import classes from "./index.module.css";

export interface ITableProps {
  className?: string;
  tableData: any;
  onActiveItemChanged: Function;
}
const Table: React.FC<ITableProps> = ({
  tableData,
  className,
  onActiveItemChanged,
}) => {
  const [active_item, setActiveItem] = React.useState<Number | undefined>(
    undefined
  );

  const handleRowClick = (index: number) => () => {
    setActiveItem(index);
    onActiveItemChanged(index);
  };

  return (
    <table className={`${className}`}>
      <caption className="header">EVENTS</caption>
      <tbody>
        {tableData.map(({ id,details }: IData, index: number) => (
          <tr
						key={id}
            className={`${classes.tableRow} ${
              active_item === index && classes.tableRowActive
            }`}
            onClick={handleRowClick(index)}
          >
            {details.slice(0, 5).map((rowDetail: IDetails) => {
              return (
                <td
                  className={classes.tableColumn}
                  title={rowDetail.title}
                  key={rowDetail.value}
                >
                  <span className={"column-title"}>{rowDetail.title}</span>
                  <span>{rowDetail.value}</span>
                  {rowDetail.title === "Aksiyon" && rowDetail.value === "-" && (
                    <span className={classes.tableNoActionRow}></span>
                  )}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;
