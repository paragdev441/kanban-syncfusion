import * as React from 'react';
import { extend } from '@syncfusion/ej2-base';
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from '@syncfusion/ej2-react-kanban';
import { DropDownListComponent, Search } from '@syncfusion/ej2-react-dropdowns';
import { Query } from '@syncfusion/ej2-data';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { SampleBase } from '../sample-base';

import * as datasourceSearch from '../DataSources/datasourceSearch.json';
/**
 * Kanban Search Filter sample
 */
class Searching extends SampleBase {
  constructor() {
    super(...arguments);
    this.data = extend([], datasourceSearch.kanbanData, null, true);
    this.priorityData = ['None', 'High', 'Normal', 'Low'];
    this.statusData = [
      { id: 'None', value: 'None' },
      { id: 'To Do', value: 'Open' },
      { id: 'In Progress', value: 'InProgress' },
      { id: 'Testing', value: 'Testing' },
      { id: 'Done', value: 'Close' },
    ];
    this.value = 'None';
    this.fields = { text: 'id', value: 'value' };
  }
  prioritySelect(args) {
    let filterQuery = new Query();
    if (args.itemData.value !== 'None') {
      filterQuery = new Query().where('Priority', 'equal', args.itemData.value);
    }
    this.statusObj.value = 'None';
    this.kanbanObj.query = filterQuery;
  }
  statusSelect(args) {
    let filterQuery = new Query();
    if (args.itemData.value !== 'None') {
      filterQuery = new Query().where('Status', 'equal', args.itemData.value);
    }
    this.priorityObj.value = 'None';
    this.kanbanObj.query = filterQuery;
  }
  searchClick(e) {
    let searchValue = e.value;
    let searchQuery = new Query();
    if (searchValue !== '') {
      searchQuery = new Query().search(
        searchValue,
        ['Id', 'Summary'],
        'contains',
        true
      );
    }
    this.kanbanObj.query = searchQuery;
  }
  resetClick() {
    document.getElementById('search_text').value = '';
    this.reset();
  }
  onFocus(e) {
    if (e.target.value === '') {
      this.reset();
    }
  }
  reset() {
    this.priorityObj.value = 'None';
    this.statusObj.value = 'None';
    this.kanbanObj.query = new Query();
  }
  render() {
    return (
      <div>
        <h2>Search and Filter Cards</h2>
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
                cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
                swimlaneSettings={{ keyField: 'Assignee' }}
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
          <div className="col-lg-3 property-section">
            <div className="property-panel-section">
              <p className="property-panel-header">Filtering</p>
              <div className="property-panel-content">
                <table className="e-filter-table">
                  <tr>
                    <td className="e-filter-label">
                      <div>Priority</div>
                    </td>
                    <td>
                      <div>
                        <DropDownListComponent
                          id="priority_filter"
                          ref={(kanban) => {
                            this.priorityObj = kanban;
                          }}
                          dataSource={this.priorityData}
                          select={this.prioritySelect.bind(this)}
                          value={this.value}
                          placeholder="Select a priority"
                        ></DropDownListComponent>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="e-filter-label">
                      <div>Status</div>
                    </td>
                    <td>
                      <DropDownListComponent
                        id="status_filter"
                        ref={(kanban) => {
                          this.statusObj = kanban;
                        }}
                        dataSource={this.statusData}
                        select={this.statusSelect.bind(this)}
                        value={this.value}
                        fields={this.fields}
                        placeholder="Select a status"
                      ></DropDownListComponent>
                    </td>
                  </tr>
                </table>
              </div>
              <p className="property-panel-header">Searching</p>
              <div className="property-panel-content">
                <table className="e-filter-table">
                  <tr>
                    <td>
                      <div>
                        <TextBoxComponent
                          id="search_text"
                          ref={(kanban) => {
                            this.textBoxObj = kanban;
                          }}
                          showClearButton={true}
                          placeholder="Enter search text"
                          onFocus={this.onFocus.bind(this)}
                          input={this.searchClick.bind(this)}
                        />
                      </div>
                    </td>
                  </tr>
                </table>
                <div className="e-reset-button">
                  <ButtonComponent
                    id="reset_filter"
                    className="e-btn"
                    onClick={this.resetClick.bind(this)}
                  >
                    Reset
                  </ButtonComponent>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Searching;
