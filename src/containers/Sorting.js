import * as React from 'react';
import { extend } from '@syncfusion/ej2-base';
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from '@syncfusion/ej2-react-kanban';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { SampleBase } from '../sample-base';
import { PropertyPane } from '../property-pane';
import * as datasourceSort from '../DataSources/datasourceSort.json';
/**
 * Kanban Sorting sample
 */
class Sorting extends SampleBase {
  constructor() {
    super(...arguments);
    this.data = extend([], datasourceSort.kanbanData, null, true);
    this.sortByData = [
      { Id: 'DataSourceOrder', Sort: 'Data Source Order' },
      { Id: 'Index', Sort: 'Index' },
      { Id: 'Custom', Sort: 'Custom' },
    ];
    this.fields = { text: 'Sort', value: 'Id' };
    this.fieldData = ['None'];
    this.directionData = ['Ascending', 'Descending'];
  }
  change(args) {
    if (args.value === 'DataSourceOrder' || args.value === 'Index') {
      const data = args.value === 'Index' ? 'RankId' : 'None';
      this.setFieldValue(data);
    }
    if (args.value === 'Custom') {
      this.fieldObj.dataSource = ['Priority', 'RankId', 'Summary'];
      this.fieldObj.value = 'Priority';
      this.fieldObj.enabled = true;
    }
  }
  setFieldValue(data) {
    this.fieldObj.dataSource = [data];
    this.fieldObj.value = data;
    this.fieldObj.enabled = false;
  }
  sortClick() {
    this.setKanbanProperties();
  }
  clearClick() {
    this.sortByObj.value = 'Index';
    this.directionObj.value = 'Ascending';
    this.setFieldValue('None');
    this.setKanbanProperties();
  }
  setKanbanProperties() {
    this.kanbanObj.sortSettings.sortBy = this.sortByObj.value;
    this.kanbanObj.sortSettings.field = this.fieldObj.value;
    this.kanbanObj.sortSettings.direction = this.directionObj.value;
  }
  cardTemplate(props) {
    return (
      <div className={'card-template ' + props.Priority}>
        <div className="e-card-header">
          <div className="e-card-header-caption">
            <div className="e-card-header-title e-tooltip-text">{props.Id}</div>
          </div>
        </div>
        <div className="e-card-content e-tooltip-text">
          <div className="e-text">{props.Summary}</div>
        </div>
        <div className="e-card-footer">
          <div className={`e-card-footer-css e-${props.Priority}`}></div>
          <div className="e-rank">Rank #{props.RankId}</div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        <h2>Sorting Cards</h2>
        <div className="kanban-control-section">
          <div className="col-lg-9 control-section">
            <div className="control-wrapper">
              <KanbanComponent
                id="kanban"
                ref={(kanban) => {
                  this.kanbanObj = kanban;
                }}
                keyField="Status"
                dataSource={this.data}
                cardSettings={{
                  headerField: 'Id',
                  contentField: 'Summary',
                  template: this.cardTemplate.bind(this),
                }}
              >
                <ColumnsDirective>
                  <ColumnDirective headerText="To Do" keyField="Open" />
                  <ColumnDirective
                    headerText="In Progress"
                    keyField="InProgress"
                  />
                  <ColumnDirective headerText="Done" keyField="Close" />
                </ColumnsDirective>
              </KanbanComponent>
            </div>
          </div>
          <div className="col-lg-3 property-section">
            <PropertyPane title="Properties">
              <table
                id="property"
                title="Properties"
                className="property-panel-table"
                style={{ width: '100%' }}
              >
                <tr>
                  <td>
                    <div>Sort By</div>
                  </td>
                  <td>
                    <DropDownListComponent
                      id="sortBy"
                      ref={(sortDrop) => {
                        this.sortByObj = sortDrop;
                      }}
                      dataSource={this.sortByData}
                      change={this.change.bind(this)}
                      fields={this.fields}
                      index={1}
                    ></DropDownListComponent>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>Field</div>
                  </td>
                  <td>
                    <DropDownListComponent
                      id="field"
                      ref={(fieldDrop) => {
                        this.fieldObj = fieldDrop;
                      }}
                      dataSource={this.fieldData}
                      enabled={false}
                      index={0}
                    ></DropDownListComponent>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>Direction</div>
                  </td>
                  <td>
                    <DropDownListComponent
                      id="direction"
                      ref={(directionDrop) => {
                        this.directionObj = directionDrop;
                      }}
                      dataSource={this.directionData}
                      index={0}
                    ></DropDownListComponent>
                  </td>
                </tr>
                <tr>
                  <td>
                    <ButtonComponent
                      id="sort"
                      className="e-btn"
                      onClick={this.sortClick.bind(this)}
                    >
                      Sort
                    </ButtonComponent>
                  </td>
                  <td>
                    <ButtonComponent
                      id="clear"
                      className="e-btn"
                      onClick={this.clearClick.bind(this)}
                    >
                      Clear
                    </ButtonComponent>
                  </td>
                </tr>
              </table>
            </PropertyPane>
          </div>
        </div>
      </div>
    );
  }
}
export default Sorting;
