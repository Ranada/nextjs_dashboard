// import * as React from "react";
import { Label, Pivot, PivotItem } from "@fluentui/react";

export default function PivotTabs() {
    return (
        <div>
            <Pivot aria-label="Links of Tab Style Pivot Example" linkFormat="tabs">
                <PivotItem headerText="Page 1"></PivotItem>
                <PivotItem headerText="Page 2"></PivotItem>
                <PivotItem headerText="Page 3"></PivotItem>
                <PivotItem headerText="Page 4"></PivotItem>
            </Pivot>
        </div>
    )
} 
    
