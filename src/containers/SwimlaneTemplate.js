import * as React from 'react';
import { extend } from '@syncfusion/ej2-base';
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from '@syncfusion/ej2-react-kanban';
import { SampleBase } from '../sample-base';

import * as dataSourceSwimlaneTemplate from '../DataSources/dataSourceSwimlaneTemplate.json';
/**
 * Kanban Swimlane Template sample
 */
class SwimlaneTemplate extends SampleBase {
  constructor() {
    super(...arguments);
    this.data = extend([], dataSourceSwimlaneTemplate.kanbanData, null, true);
    this.template = this.rowTemplate;
  }
  rowTemplate(props) {
    var src = 'src/kanban/images/' + props.keyField + '.png';
    return (
      <div className="swimlane-template e-swimlane-template-table">
        <div className="e-swimlane-row-text">
          <img src={src} alt={props.keyField} />
          <span>{props.textField}</span>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        <h2>Swimlane template</h2>
        <div className="kanban-control-section">
          <div className="control-section">
            <div className="control-wrapper">
              <KanbanComponent
                id="kanban"
                cssClass="kanban-swimlane-template"
                keyField="Status"
                dataSource={this.data}
                cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
                swimlaneSettings={{
                  keyField: 'Assignee',
                  template: this.template.bind(this),
                }}
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

export default SwimlaneTemplate;
