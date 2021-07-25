import React, { FC } from "react";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { List, Divider, Tooltip } from "antd";
import moment from "moment";
import "./StatusList.scss";

export interface Items {
  title: string;
  stage: string;
  DayBefore: number;
  uptimePer: number;
  barGraph?: any;
  QIcon?: JSX.Element;
}

const bar = new Array(90).fill(null);

const QIconLink: FC<{ linkTitle: string; link: string }> = (props) => {
  return (
    <Tooltip title={props.linkTitle}>
      <a href={props.link} className='Q-icon'>
        <QuestionCircleOutlined />
      </a>
    </Tooltip>
  );
};

const data: Array<Items> = [
  {
    title: "Shadab Messenger",
    stage: "Operational",
    DayBefore: bar.length,
    uptimePer: 95,
    QIcon: <QIconLink linkTitle='Shadab.com' link='#' />,
  },
  {
    title: "Shadab Web Application",
    stage: "Operational",
    DayBefore: bar.length,
    uptimePer: 95,
    QIcon: <QIconLink linkTitle='Shadab.com' link='' />,
  },
  {
    title: "Shadab APIs",
    stage: "Operational",
    DayBefore: bar.length,
    uptimePer: 95,
    QIcon: <QIconLink linkTitle='Shadab.com' link='' />,
  },
  {
    title: "Shadab Mobile APIs",
    stage: "Operational",
    DayBefore: bar.length,
    uptimePer: 95,
    QIcon: <QIconLink linkTitle='Shadab.com' link='' />,
  },
  {
    title: "Shadab message delivery",
    stage: "Operational",
    DayBefore: bar.length,
    uptimePer: 95,
    QIcon: <QIconLink linkTitle='Shadab.com' link='' />,
  },
];

const ListItem: FC<{ item: Items; key: number }> = (props) => {
  const { title, stage, DayBefore, uptimePer, QIcon } = props.item;

  return (
    <List.Item key={props.key}>
      <div className='list-wrapper'>
        <div className='list-header'>
          <div>
            <h3>
              {title} {QIcon}
            </h3>
          </div>
          <div>
            <Tooltip title='Tooltip will show on mouse enter' placement='topRight'>
              <p>{stage}</p>
            </Tooltip>
          </div>
        </div>
        <div className='list-body'>
          {bar.map((b, i) => {
            return (
              <Tooltip
                title={`${moment()
                  .subtract(`${bar.length - 1 - i}`, "days")
                  .format("dddd Do MMM")}.`}
                key={i}>
                <div className='bar'></div>
              </Tooltip>
            );
          })}
        </div>
        <div className='list-footer'>
          <div className='before-day'>{DayBefore} days ago</div>
          <Divider plain className='divider'>
            <span className='uptimePer'>{uptimePer} % uptime</span>
          </Divider>
          <div className='today-text'>Today</div>
        </div>
      </div>
    </List.Item>
  );
};

const StatusList: FC<{}> = () => {
  return (
    <div>
      <List size='large' dataSource={data} renderItem={(item: Items, i: number) => <ListItem item={item} key={i} />} />
    </div>
  );
};

export default StatusList;
