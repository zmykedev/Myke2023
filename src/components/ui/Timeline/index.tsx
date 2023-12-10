import React from "react";
import { Box } from "./Box/styled";
import { EventLine } from "./styled";

export interface TimelineEvent {
  content: React.ReactNode;
  position: "left" | "right";
  id: string;
  height: string;
  animationProps?: {
    timeline?: string;
    range?: string;
    animationName?: string;
    animationStyles?: string;
  };
}

export interface TimelineInterface {
  events: TimelineEvent[];
}

export const TimelineInterface: React.FunctionComponent<TimelineInterface> = ({
  events,
}) => {
  return (
    <div>
      <EventLine />
      {events?.map((event) => (
        <Box
          key={event.id}
          height={event.height}
          position={event.position}
          animationProps={event.animationProps}
        >
          {event.content}
        </Box>
      ))}
    </div>
  );
};
