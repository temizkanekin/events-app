import React from "react";
import { IMedia } from "../../models/ISampleData";
import {DialogOuter} from "./dialog-outer";

interface IMediaViewerProps {
  media: IMedia;
}

const MediaViewer: React.FC<IMediaViewerProps> = ({ media }) => {
  const [
    is_image_dialog_opened,
    setIsImageDialogOpened,
  ] = React.useState<boolean>(false);
  const { url, type } = media;
  return (
    <>
      {type === "audio" ? (
        <audio src={url} controls />
      ) : (
        <img
          className="m-auto cursor-pointer"
          onClick={() => setIsImageDialogOpened(true)}
          src={url}
          alt={type}
          style={{ maxWidth: "250px", maxHeight: "250px" }}
        />
      )}
      {is_image_dialog_opened && (
        <DialogOuter>
          <div className="m-auto relative">
            <img src={url} alt={type} />
            <button className="p-2 absolute right-0 bottom-0">
              <img
                src="/icons/exit_fullscreen_icon.svg"
                alt="exit fullscreen"
                onClick={() => setIsImageDialogOpened(false)}
              />
            </button>
          </div>
        </DialogOuter>
      )}
    </>
  );
};
export default MediaViewer;
