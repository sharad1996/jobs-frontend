import React from "react";

export function timeAgo(d) {
  if (!d) return "";

  const minutes = Math.floor((new Date() - new Date(d)) / 1000) / 60;
  if (minutes < 10) {
    return "Now";
  }
  if (minutes > 10 && minutes < 60) {
    return `${Math.floor(minutes)}m`;
  }
  if (minutes >= 60 && minutes < 60 * 24) {
    return `${Math.floor(minutes / 60)}h`;
  }
  return `${Math.floor(minutes / 60 / 24)}d`;
}

export function JobTags({ tags, type = "tag" }) {
  const formatTagName = (name) => name.replace(/\s+/, "_");
  return tags.map((tag) => (
    <span key={tag.id} className={`tag tag-${type}`}>
      #{formatTagName(tag.name)}
    </span>
  ));
}
