import { memo } from "react";
import { Tabs } from 'antd';
import GeneralSituation from './generalSituation';
import TextSearch from "./textSearch";

const { TabPane } = Tabs;

const FaceArchives = memo(() => {
	return (
		<Tabs defaultActiveKey="1">
			<TabPane tab="聚档概况" key="1">
				<GeneralSituation />
			</TabPane>
			<TabPane tab="文字搜索" key="2">
				<TextSearch />
			</TabPane>
			<TabPane tab="图片搜索" key="3">
				图片搜索
			</TabPane>
			<TabPane tab="系统配置" key="4">
				系统配置
			</TabPane>
		</Tabs>
	)
});

export default FaceArchives;
