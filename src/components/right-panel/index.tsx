import React from "react";
import { Button } from "../button";
import MediaViewer from "./media-viewer";
import { DialogOuter } from "./dialog-outer";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { Icon, LatLngExpression, LatLngTuple } from "leaflet";
import { IData, IDetails } from "../../models/ISampleData";
import classes from "./index.module.css";

export interface IRightPanelProps {
  className?: string;
  rightPanelData: IData;
  handleNoActionNeeded: Function;
  handleActionChanged: Function;
}

export interface IChangeViewProps {
  center: LatLngExpression | LatLngTuple;
  zoom: number;
}

const primary = new Icon({
  iconUrl: "icons/primary_pin.svg",
  iconSize: [24, 36],
  iconAnchor: [12, 36],
});

const ChangeView: React.FC<IChangeViewProps> = ({ center, zoom }) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
};

const RightPanel: React.FC<IRightPanelProps> = ({
  className,
  rightPanelData,
  handleNoActionNeeded,
  handleActionChanged,
}) => {
  const [
    right_panel_content_type,
    setRightPanelContentType,
  ] = React.useState<string>("details");

  const [is_action_taken, setIsActionTaken] = React.useState<boolean>(false);
  const [
    is_take_action_dialog_open,
    setIsTakeActionDialogOpen,
  ] = React.useState<boolean>(false);
  const [
    action_dialog_action_type,
    setActionDialogActionType,
  ] = React.useState<string>("select_action");
  const [
    action_dialog_action_value,
    setActionDialogActionValue,
  ] = React.useState<string | undefined>(undefined);

  const [text_area_value, setTextAreaValue] = React.useState<
    string | undefined
  >(undefined);
  const [
    is_action_take_completed,
    setIsActionTakeCompleted,
  ] = React.useState<boolean>(false);
  const [is_loading, setIsLoading] = React.useState<boolean>(false);

  const resetState = () => {
    setIsActionTaken(false);
    setIsTakeActionDialogOpen(false);
    setActionDialogActionType("select_action");
    setActionDialogActionValue(undefined);
    setTextAreaValue(undefined);
    setIsActionTakeCompleted(false);
  };

  React.useEffect(() => {
    //reset state when panel data is changed
    resetState();
  }, [rightPanelData]);

  const handleNoAction = () => {
    handleNoActionNeeded();
    setIsActionTaken(true);
  };

  const handleOpenTakeActionDialog = () => {
    setIsTakeActionDialogOpen(true);
  };

  const handleTakeAction = () => {
    setIsLoading(true);
    setIsActionTakeCompleted(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleSuccessButton = () => {
    action_dialog_action_type === "select_action"
      ? setActionDialogActionType("take_action")
      : handleTakeAction();
  };

  const handleCloseCompletedAction = () => {
    handleActionChanged(action_dialog_action_value);
    resetState();
    setIsActionTaken(true);
  };

  return (
    <div className={`${className}`}>
      <header className="header">EVENT DETAILS</header>
      <div className={classes.rightPanelContent}>
        {!is_action_taken && (
          <div className="w-full flex justify-center m-auto">
            <Button
              fullWidth
              large
              style={{ marginRight: "1rem" }}
              onClick={handleNoAction}
            >
              NO ACTION NEEDED
            </Button>
            <Button
              fullWidth
              large
              buttonType="success"
              onClick={handleOpenTakeActionDialog}
            >
              TAKE ACTION
            </Button>
          </div>
        )}
        <div className="mt-4 w-full flex border-b-2 border-gray-500 border-solid">
          <button
            className={`${classes.rightPanelButton} ${
              right_panel_content_type === "details" &&
              classes.rightPanelButtonActive
            }`}
            onClick={() => setRightPanelContentType("details")}
          >
            DETAILS
          </button>
          <button
            className={`${classes.rightPanelButton} ${
              right_panel_content_type === "location" &&
              classes.rightPanelButtonActive
            }`}
            onClick={() => setRightPanelContentType("location")}
          >
            LOCATION
          </button>
          <button
            className={`${classes.rightPanelButton} ${
              right_panel_content_type === "media" &&
              classes.rightPanelButtonActive
            }`}
            onClick={() => setRightPanelContentType("media")}
          >
            MEDIA
          </button>
        </div>
        <div className="mt-4 p-2 w-full">
          {right_panel_content_type === "details" && (
            <div className="flex flex-wrap overflow-auto">
              {rightPanelData.details.slice(5).map((data: IDetails) => (
                <div className="p-2 flex flex-col w-1/2" key={data.value}>
                  <span className="column-title">{data.title}</span>
                  <span>{data.value}</span>
                </div>
              ))}
            </div>
          )}
          {right_panel_content_type === "media" && (
            <MediaViewer media={rightPanelData.media[0]} />
          )}
          {right_panel_content_type === "location" && (
            <MapContainer
              id="mapid"
              center={[
                rightPanelData.location.latitude,
                rightPanelData.location.longitude,
              ]}
              zoom={13}
              scrollWheelZoom={false}
            >
              <ChangeView
                center={[
                  rightPanelData.location.latitude,
                  rightPanelData.location.longitude,
                ]}
                zoom={13}
              />
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                icon={primary}
                position={[
                  rightPanelData.location.latitude,
                  rightPanelData.location.longitude,
                ]}
              />
            </MapContainer>
          )}
        </div>
      </div>
      {is_take_action_dialog_open && (
        <DialogOuter>
          {!is_action_take_completed ? (
            <dialog
              className={classes.actionTakeProgressDialog}
              // className="m-auto flex flex-col relative"
              // style={{ minWidth: "500px", color: "#172C49" }}
            >
              <div className="w-full flex border-b-2 border-gray-500 border-solid justify-center">
                <p
                  className={`${classes.rightPanelButton} ${
                    action_dialog_action_type === "select_action" &&
                    classes.rightPanelButtonActive
                  }`}
                  style={{ cursor: "auto" }}
                >
                  <span className={classes.numberCircle}>1</span>SELECT ACTION
                </p>
                <button
                  className={`${classes.rightPanelButton} ${
                    action_dialog_action_type === "take_action" &&
                    classes.rightPanelButtonActive
                  }`}
                  style={{ cursor: "auto" }}
                >
                  <span className={classes.numberCircle}>2</span>TAKE ACTION
                </button>
              </div>

              <div className="p-4 w-full flex flex-col">
                {(action_dialog_action_type === "select_action" ||
                  action_dialog_action_value === "Mark As Resolved") && (
                  <div
                    className={`${classes.actionDialogItem} ${
                      action_dialog_action_value === "Mark As Resolved" &&
                      classes.actionDialogItemActive
                    }`}
                    onClick={() =>
                      setActionDialogActionValue("Mark As Resolved")
                    }
                  >
                    <p className="font-bold">Mark As Resolved</p>
                    <p>
                      Mark this event as resolved and enter the details of the
                      resolution.
                    </p>
                  </div>
                )}
                {(action_dialog_action_type === "select_action" ||
                  action_dialog_action_value === "Change Asset") && (
                  <div
                    className={`${classes.actionDialogItem} ${
                      action_dialog_action_value === "Change Asset" &&
                      classes.actionDialogItemActive
                    }`}
                    onClick={() => setActionDialogActionValue("Change Asset")}
                  >
                    <p className="font-bold">Change Asset</p>
                    <p>Change the asset with another one.</p>
                  </div>
                )}
                {action_dialog_action_type === "take_action" && (
                  <div className="p-2 flex flex-col">
                    <p className="font-bold">Resolution Detail *</p>
                    <textarea
                      className="p-2 w-full border border-gray-500 border-solid"
                      value={text_area_value}
                      onChange={(e) => setTextAreaValue(e.target.value)}
                      rows={4}
                      cols={50}
                      maxLength={300}
                      placeholder="Enter resolution detail.."
                    />
                  </div>
                )}
              </div>
              <div className="flex m-auto">
                {action_dialog_action_type === "take_action" && (
                  <Button
                    medium
                    style={{ margin: ".5rem .5rem auto auto" }}
                    onClick={() => setActionDialogActionType("select_action")}
                  >
                    BACK
                  </Button>
                )}
                <Button
                  buttonType="success"
                  disabled={!action_dialog_action_value}
                  medium
                  style={{ margin: ".5rem auto auto auto" }}
                  onClick={handleSuccessButton}
                >
                  {action_dialog_action_type === "select_action"
                    ? "NEXT"
                    : "TAKE ACTION"}
                </Button>
                <button className="p-2 absolute right-0 top-0">
                  <img
                    src="/icons/Icon_X.svg"
                    alt="close dialog"
                    onClick={() => resetState()}
                  />
                </button>
              </div>
            </dialog>
          ) : (
            <dialog
              className={classes.actionTakeCompleteDialog}
            >
              {!is_loading &&
                (text_area_value ? (
                  <img
                    className="mb-4"
                    src="/icons/success.svg"
                    alt="success icon"
                    width="56"
                    height="56"
                  />
                ) : (
                  <img
                    className="mb-4"
                    src="/icons/fail.svg"
                    alt="fail icon"
                    width="56"
                    height="56"
                  />
                ))}
              {is_loading ? (
                <div className={classes.loader} />
              ) : text_area_value ? (
                <div className="flex flex-col items-center">
                  <p className="font-bold text-xl" style={{ color: "#3DA836" }}>
                    ACTION HAS BEEN TAKEN!
                  </p>
                  <p>You can see the action details from details tab.</p>
                  <Button
                    buttonType="success"
                    medium
                    style={{ margin: "1rem auto auto auto" }}
                    onClick={handleCloseCompletedAction}
                  >
                    {" "}
                    OK{" "}
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <p className="font-bold text-xl" style={{ color: "#D92323" }}>
                    A PROBLEM OCCURED!
                  </p>
                  <p>
                    We cannot continue due to a problem. Please try again later.
                  </p>
                  <button className="p-2 absolute right-0 top-0">
                    <img
                      src="/icons/Icon_X.svg"
                      alt="close dialog"
                      onClick={() => resetState()}
                    />
                  </button>
                </div>
              )}
            </dialog>
          )}
        </DialogOuter>
      )}
    </div>
  );
};
export default RightPanel;
