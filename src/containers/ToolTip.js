import * as React from 'react';
import { extend } from '@syncfusion/ej2-base';
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from '@syncfusion/ej2-react-kanban';
import { SampleBase } from '../sample-base';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { PropertyPane } from '../property-pane';

import * as dataSourceToolTip from '../DataSources/dataSourceToolTip.json';
/**
 * Kanban Tooltip Template sample
 */
class ToolTip extends SampleBase {
  constructor() {
    super(...arguments);
    this.data = extend([], dataSourceToolTip.kanbanData, null, true);
  }
  template(props) {
    return (
      <div className="e-kanbantooltiptemp">
        <table>
          <tr>
            <td className="e-kanban-card-details">
              <table>
                <colgroup>
                  <col style={{ width: '30%' }} />
                  <col style={{ width: '70%' }} />
                </colgroup>
                <tbody>
                  <tr>
                    <td className="CardHeader">Assignee:</td>
                    <td>{props.Assignee}</td>
                  </tr>
                  <tr>
                    <td className="CardHeader">Type:</td>
                    <td>{props.Type}</td>
                  </tr>
                  <tr>
                    <td className="CardHeader">Estimate:</td>
                    <td>{props.Estimate}</td>
                  </tr>
                  <tr>
                    <td className="CardHeader">Summary:</td>
                    <td>{props.Summary}</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </table>
      </div>
    );
  }
  onToolTipChange(args) {
    this.kanbanObj.enableTooltip = args.checked;
  }
  onToolTipTemplateChange(args) {
    this.kanbanObj.tooltipTemplate = args.checked ? this.template : null;
  }
  render() {
    return (
      <div>
        <h2>ToolTip</h2>
        <div className="kanban-control-section">
          <div className="col-lg-9 control-section">
            <div className="control-wrapper">
              <KanbanComponent
                id="kanban"
                cssClass="kanban-tooltip"
                keyField="Status"
                dataSource={this.data}
                ref={(kanban) => {
                  this.kanbanObj = kanban;
                }}
                cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
                enableTooltip={true}
                tooltipTemplate={this.template.bind(this)}
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
            <PropertyPane title="Properties">
              <table
                id="property"
                title="Properties"
                className="property-panel-table"
                style={{ width: '100%' }}
              >
                <tbody>
                  <tr style={{ height: '50px' }}>
                    <td style={{ width: '90%' }}>
                      <div className="enableTooltip">
                        <CheckBoxComponent
                          checked={true}
                          label="Enable Tooltip"
                          change={this.onToolTipChange.bind(this)}
                        ></CheckBoxComponent>
                      </div>
                    </td>
                  </tr>
                  <tr style={{ height: '50px' }}>
                    <td style={{ width: '90%' }}>
                      <div className="enableTooltipTemplate">
                        <CheckBoxComponent
                          checked={true}
                          label="Enable Tooltip Template"
                          change={this.onToolTipTemplateChange.bind(this)}
                        ></CheckBoxComponent>
                      </div>
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

export default ToolTip;
