/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import * as React from "react";
import {
  AuthorContainer,
  AuthorLabel,
  MessageBody,
  MessageContainer,
  MessageContent,
  MessageTimestamp,
  AuthorBotTag
} from "./style";
import "./styles.css";

function DiscordMessage(props) {
  return (
    <MessageContainer>
      <MessageTimestamp src={props.avatar} alt={props.username + "'s avatar"} />
      <MessageBody>
        <AuthorContainer>
          <AuthorLabel>{props.username}</AuthorLabel>
          {props.isBot && <AuthorBotTag>BOT</AuthorBotTag>}
          <MessageTimestamp>{props.time}</MessageTimestamp>
        </AuthorContainer>
        <MessageContent>{props.body}</MessageContent>
      </MessageBody>
    </MessageContainer>
  );
}

export default DiscordMessage;
