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
import * as dataSourceEditing from '../DataSources/dataSourceEditing.json';
/**
 * Kanban Dialog Editing sample
 */
class Editing extends SampleBase {
  constructor() {
    super(...arguments);
    this.data = extend([], dataSourceEditing.kanbanData, true);
  }
  addClick() {
    const cardIds = this.kanbanObj.kanbanData.map((obj) =>
      parseInt(obj.Id.replace('Task ', ''), 10)
    );
    const cardCount = Math.max.apply(Math, cardIds) + 1;
    const cardDetails = {
      Id: 'Task ' + cardCount,
      Status: 'Open',
      Priority: 'Normal',
      Assignee: 'Andrew Fuller',
      Estimate: 0,
      Tags: '',
      Summary: '',
    };
    this.kanbanObj.openDialog('Add', cardDetails);
  }
  dialogTemplate(props) {
    return <KanbanDialogFormTemplate {...props} />;
  }
  render() {
    return (
      <div>
        <h2>Editing</h2>
        <div className="kanban-control-section">
          <div className="col-lg-9 control-section">
            <div className="control-wrapper">
              <div className="kanban-section">
                <KanbanComponent
                  id="kanban"
                  ref={(kanban) => {
                    this.kanbanObj = kanban;
                  }}
                  keyField="Status"
                  dataSource={this.data}
                  cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
                  dialogSettings={{ template: this.dialogTemplate }}
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
          <div className="col-lg-3 property-section">
            <PropertyPane title="Properties">
              <table id="property" title="Properties">
                <tr>
                  <td>
                    <ButtonComponent
                      id="addNew"
                      className="e-btn e-dialog-add"
                      onClick={this.addClick.bind(this)}
                    >
                      Add New Card
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
export class KanbanDialogFormTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.assigneeData = [
      'Nancy Davloio',
      'Andrew Fuller',
      'Janet Leverling',
      'Steven walker',
      'Robert King',
      'Margaret hamilt',
      'Michael Suyama',
    ];
    this.statusData = ['Open', 'InProgress', 'Testing', 'Close'];
    this.priorityData = [
      'Low',
      'Normal',
      'Critical',
      'Release Breaker',
      'High',
    ];
    this.tagsHtmlAttributes = { name: 'Tags' };
    this.state = extend({}, {}, props, true);
  }
  onChange(args) {
    let key = args.target.name;
    let value = args.target.value;
    this.setState({ [key]: value });
  }
  render() {
    let data = this.state;
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td className="e-label">ID</td>
              <td>
                <div className="e-float-input e-control-wrapper">
                  <input
                    id="Id"
                    name="Id"
                    type="text"
                    className="e-field"
                    value={data.Id}
                    disabled
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td className="e-label">Status</td>
              <td>
                <DropDownListComponent
                  id="Status"
                  name="Status"
                  dataSource={this.statusData}
                  className="e-field"
                  placeholder="Status"
                  value={data.Status}
                ></DropDownListComponent>
              </td>
            </tr>
            <tr>
              <td className="e-label">Assignee</td>
              <td>
                <DropDownListComponent
                  id="Assignee"
                  name="Assignee"
                  className="e-field"
                  dataSource={this.assigneeData}
                  placeholder="Assignee"
                  value={data.Assignee}
                ></DropDownListComponent>
              </td>
            </tr>
            <tr>
              <td className="e-label">Priority</td>
              <td>
                <DropDownListComponent
                  type="text"
                  name="Priority"
                  id="Priority"
                  popupHeight="300px"
                  className="e-field"
                  value={data.Priority}
                  dataSource={this.priorityData}
                  placeholder="Priority"
                ></DropDownListComponent>
              </td>
            </tr>
            <tr>
              <td className="e-label">Summary</td>
              <td>
                <div className="e-float-input e-control-wrapper">
                  <textarea
                    name="Summary"
                    className="e-field"
                    value={data.Summary}
                    onChange={this.onChange.bind(this)}
                  ></textarea>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Editing;
