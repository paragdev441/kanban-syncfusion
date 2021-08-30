import * as React from 'react';
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from '@syncfusion/ej2-react-kanban';
import { SampleBase } from '../sample-base';
import { DataManager } from '@syncfusion/ej2-data';
/**
 * Kanban Remote Data sample
 */
class RemoteData extends SampleBase {
  constructor() {
    super(...arguments);
    this.dataManger = new DataManager({
      url: 'https://js.syncfusion.com/ejServices/wcf/Northwind.svc/Tasks',
      crossDomain: true,
    });
  }
  dialogOpen(args) {
    args.cancel = true;
  }
  render() {
    return (
      <div>
        <h2>Remote Data</h2>
        <div className="kanban-control-section">
          <div className="col-lg-12 control-section">
            <div className="control-wrapper">
              <KanbanComponent
                id="kanban"
                keyField="Status"
                dataSource={this.dataManger}
                cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
                allowDragAndDrop={false}
                dialogOpen={this.dialogOpen.bind(this)}
              >
                <ColumnsDirective>
                  <ColumnDirective headerText="To Do" keyField="Open" />
                  <ColumnDirective
                    headerText="In Progress"
                    keyField="InProgress"
                  />
                  <ColumnDirective headerText="Testing" keyField="Testing" />
                  <ColumnDirective headerText="Done" keyField="Close" />
                </ColumnsDirective>
              </KanbanComponent>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RemoteData;
