import * as React from 'react';
import { extend } from '@syncfusion/ej2-base';
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from '@syncfusion/ej2-react-kanban';
import { SampleBase } from '../sample-base';
import * as dataSourceToggleColumns from '../DataSources/dataSourceToggleColumns.json';
/**
 * Kanban Toggle Columns sample
 */
class ToggleColumns extends SampleBase {
  constructor() {
    super(...arguments);
    this.data = extend([], dataSourceToggleColumns.kanbanData, null, true);
  }
  render() {
    return (
      <div>
        <h2>Toogle Columns</h2>
        <div className="kanban-control-section">
          <div className="col-lg-12 control-section">
            <div className="control-wrapper">
              <KanbanComponent
                id="kanban"
                keyField="Status"
                dataSource={this.data}
                cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
              >
                <ColumnsDirective>
                  <ColumnDirective
                    headerText="To Do"
                    keyField="Open"
                    allowToggle={true}
                  />
                  <ColumnDirective
                    headerText="In Progress"
                    keyField="InProgress"
                    allowToggle={true}
                  />
                  <ColumnDirective
                    headerText="Testing"
                    keyField="Testing"
                    allowToggle={true}
                    isExpanded={false}
                  />
                  <ColumnDirective
                    headerText="Done"
                    keyField="Close"
                    allowToggle={true}
                  />
                </ColumnsDirective>
              </KanbanComponent>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ToggleColumns;
