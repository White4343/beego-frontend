import React, { useEffect } from 'react';
import {
    CreateButton,
    Datagrid,
    FilterButton,
    FilterForm,
    ListBase,
    Pagination,
    TextField,
    TextInput,
    EditButton,
    DeleteButton,
    ExportButton,
    FunctionField,
    NumberField,
    ArrayField,
    SingleFieldList,
    ChipField,
    List,
    DateField,
    useRecordContext,
    WithRecord,
    SelectInput
} from 'react-admin';
import { Chip, ImageListItem, Stack } from '@mui/material';
import { IProduct, IUser } from "../types";
import { ImportButton } from "react-admin-import-csv";
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

const sdk = new ChartsEmbedSDK({
    baseUrl: "https://charts.mongodb.com/charts-project-0-duzrk",
    showAttribution: false
});

const userChart = sdk.createChart({
    chartId: "64861426-80fc-4b29-80dc-a45789631615"
});

const apiaryChart = sdk.createChart({
    chartId: "64861acf-72f6-4ee2-8fa8-139403f731b1"
});

const ChartsList: React.FC = (props) => {

    useEffect(() => {
        const renderCharts = async () => {
            await userChart.render(document.getElementById("user") as HTMLElement);
            await apiaryChart.render(document.getElementById("apiary") as HTMLElement);
        };

        renderCharts();
    }, []);

    return (
        <div style={{ display: "flex", gap: 50 }}>
            <div id="user" style={{ height: 500, width: 500 }}></div>
            <div id="apiary" style={{ height: 500, width: 500 }}></div>
        </div>
    );
};

export default ChartsList;
