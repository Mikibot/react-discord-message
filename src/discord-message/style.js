import {
    styled
} from "styletron-react";

const AuthorAvatar = styled("img", () => ({
    height: "40px",
    width: "40px",
    display: "initial",
    marginLeft: "15px",
    marginRight: "15px",
    borderRadius: "50%"
}))

const AuthorBotTag = styled("span", () => ({
    backgroundColor: "#7289da",
    color: "#fff",
    marginLeft: "0.4rem",
    borderRadius: "3px",
    fontSize: "0.725rem",
    padding: "0.075rem 0.275rem"
}));

const AuthorContainer = styled("div", () => ({
    fontSize: "16px",
    marginTop: "3px"
}));

const AuthorLabel = styled("span", () => ({
    fontWeight: "bold"
}));

const MessageBody = styled("div", () => ({
    fontSize: "16px",
    marginTop: "6px"
}));

const MessageContent = styled("div", () => ({
    marginTop: "2px",
    marginBottom: "0.5rem"
}));

const MessageContainer = styled("div", () => ({
    backgroundColor: "#36393f",
    paddingTop: "10px",
    paddingRight: "15px",
    display: "flex",
    color: "white",
    textAlign: "left"
}));

const MessageTimestamp = styled("span", () => ({
    color: "hsla(0, 0%, 100%, 0.2)",
    fontSize: "0.7 rem",
    marginLeft: "0.4rem"
}));

const ReactionContainer = styled("div", () => ({
    marginTop: "3px",
    display: "flex",
    userSelect: "none"
}));

export {
    AuthorAvatar,
    AuthorBotTag,
    AuthorContainer,
    AuthorLabel,
    MessageBody,
    MessageContainer,
    MessageContent,
    MessageTimestamp,
    ReactionContainer
};