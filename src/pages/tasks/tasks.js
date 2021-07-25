import React from 'react';
import 'devextreme/data/odata/store';
import DataGrid from 'devextreme-react/data-grid';
import '../../components/font/style.css'
import './tasks.css'
export default () => (
  <React.Fragment>
    <h2 className={'content-block'}>Tasks</h2>
    {/* Test Icon */}
    <span class="icon-Sort-Descending"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span>
    <DataGrid
                        allowColumnReordering   = {true}
                        allowColumnResizing     = {true}
                        columnAutoWidth         = {true}
                        columnHidingEnabled     = {false}
                        dataSource              = {dataSource}
                        defaultFocusedRowIndex  = {0}
                        focusedRowEnabled       = {true}            
                        keyExpr                 = "IM_ID"       
                        rowAlternationEnabled   = {true}
                        showBorders             = {true}  
                        showRowLines            = {true}
                        height                  = {'100vh'}
                        className               = 'dx-datagrid-items'>
                            
                      </DataGrid>
  </React.Fragment>
);

const dataSource = {
  store: {
    type: 'odata',
    key: 'Task_ID',
    url: 'https://js.devexpress.com/Demos/DevAV/odata/Tasks'
  },
  expand: 'ResponsibleEmployee',
  select: [
    'Task_ID',
    'Task_Subject',
    'Task_Start_Date',
    'Task_Due_Date',
    'Task_Status',
    'Task_Priority',
    'Task_Completion',
    'ResponsibleEmployee/Employee_Full_Name'
  ]
};

const priorities = [
  { name: 'High', value: 4 },
  { name: 'Urgent', value: 3 },
  { name: 'Normal', value: 2 },
  { name: 'Low', value: 1 }
];
