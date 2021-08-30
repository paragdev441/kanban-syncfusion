import * as React from 'react';
import { extend } from '@syncfusion/ej2-base';
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from '@syncfusion/ej2-react-kanban';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { SampleBase } from '../sample-base';
import { PropertyPane } from '../property-pane';
import * as dataSourceShowHideColumns from '../DataSources/dataSourceShowHideColumns.json';
/**
 * Kanban Show / Hide Columns sample
 */
class ShowHideColumns extends SampleBase {
  constructor() {
    super(...arguments);
    this.data = extend([], dataSourceShowHideColumns.kanbanData, null, true);
  }
  onChange(args) {
    if (args.checked) {
      this.kanbanObj.showColumn(this.checkObj.element.getAttribute('data-id'));
    } else {
      this.kanbanObj.hideColumn(this.checkObj.element.getAttribute('data-id'));
    }
  }
  onChangeProgress(args) {
    if (args.checked) {
      this.kanbanObj.showColumn(
        this.progressObj.element.getAttribute('data-id')
      );
    } else {
      this.kanbanObj.hideColumn(
        this.progressObj.element.getAttribute('data-id')
      );
    }
  }
  onChangeReview(args) {
    if (args.checked) {
      this.kanbanObj.showColumn(this.reviewObj.element.getAttribute('data-id'));
    } else {
      this.kanbanObj.hideColumn(this.reviewObj.element.getAttribute('data-id'));
    }
  }
  onChangeClose(args) {
    if (args.checked) {
      this.kanbanObj.showColumn(this.closeObj.element.getAttribute('data-id'));
    } else {
      this.kanbanObj.hideColumn(this.closeObj.element.getAttribute('data-id'));
    }
  }
  render() {
    return (
      <div>
        <h2>Show/Hide Columns</h2>
        <div className="kanban-control-section">
          <div className="col-lg-9 control-section">
            <div className="control-wrapper">
              <KanbanComponent
                id="kanban"
                keyField="Status"
                dataSource={this.data}
                ref={(kanban) => {
                  this.kanbanObj = kanban;
                }}
                cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
              >
                <ColumnsDirective>
                  <ColumnDirective headerText="To Do" keyField="Open" />
                  <ColumnDirective
                    headerText="In Progress"
                    keyField="InProgress"
                  />
                  <ColumnDirective headerText="In Review" keyField="Review" />
                  <ColumnDirective headerText="Done" keyField="Close" />
                </ColumnsDirective>
              </KanbanComponent>
            </div>
          </div>
          <div className="col-lg-3 property-section">
            <PropertyPane title="Show / Hide Columns">
              <table
                id="property"
                title="Show / Hide Columns"
                className="property-panel-table"
                style={{ width: '100%' }}
              >
                <tbody>
                  <tr style={{ height: '50px' }}>
                    <td style={{ width: '100%' }}>
                      <CheckBoxComponent
                        ref={(kanban) => {
                          this.checkObj = kanban;
                        }}
                        data-id="Open"
                        checked={true}
                        label="To Do"
                        change={this.onChange.bind(this)}
                      ></CheckBoxComponent>
                    </td>
                  </tr>
                  <tr style={{ height: '50px' }}>
                    <td style={{ width: '100%' }}>
                      <CheckBoxComponent
                        ref={(kanban) => {
                          this.progressObj = kanban;
                        }}
                        data-id="InProgress"
                        checked={true}
                        label="In Progress"
                        change={this.onChangeProgress.bind(this)}
                      ></CheckBoxComponent>
                    </td>
                  </tr>
                  <tr style={{ height: '50px' }}>
                    <td style={{ width: '100%' }}>
                      <CheckBoxComponent
                        ref={(kanban) => {
                          this.reviewObj = kanban;
                        }}
                        data-id="Review"
                        checked={true}
                        label="In Review"
                        change={this.onChangeReview.bind(this)}
                      ></CheckBoxComponent>
                    </td>
                  </tr>
                  <tr style={{ height: '50px' }}>
                    <td style={{ width: '100%' }}>
                      <CheckBoxComponent
                        ref={(kanban) => {
                          this.closeObj = kanban;
                        }}
                        data-id="Close"
                        checked={true}
                        label="Done"
                        change={this.onChangeClose.bind(this)}
                      ></CheckBoxComponent>
                    </td>
                  </tr>
                </tbody>
              </table>
            </PropertyPane>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowHideColumns;
