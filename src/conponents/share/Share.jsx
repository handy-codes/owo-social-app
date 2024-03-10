import { EmojiEmotions, Label, PermMedia, Room } from "@mui/icons-material"
import "./share.css"

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareProfileImg" src="./assets/team/girl.png" alt="a lady" />
                <input placeholder="What's in your mind Ada Abia?" className="shareInput"/>
            </div>
            <hr className="shareHr" />
            <form className="shareBottom" >
                <div className="shareOptions">
                    <label htmlFor="file" className="shareOption">
                        <PermMedia htmlColor="tomato" className="shareIcon"/>
                        <span className="shareOptionText">Photo or Videos</span>
                        <input style={{display:"none"}} type="file" id="file" accept=".png, .jpeg, .jpg"/>
                    </label>
                    <button className="shareButton" typle="submit">Share</button>
                    <div className="shareOption">
                        <Label htmlColor="green" className="shareIcon"/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor="blue" className="shareIcon"/>
                        <span className="one shareOptionText">Location</span>
                    </div>
                    <div className="two shareOption">
                        <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                        <span className="two shareOptionText">Feelings</span>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}
