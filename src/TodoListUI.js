import React, { Component } from "react";
import { Input, Button, List, Typography } from "antd";

class TodoListUI extends Component {
  render() {
    return (
      <div style={{ marginTop: "10px", marginLeft: "10px" }}>
        <div>
          <Input
            placeholder="to do info"
            style={{ width: "300px", marginRight: "10px" }}
            onChange={this.props.handleInputChange}
            value={this.props.inputValue}
          />
          <Button type="primary" onClick={this.props.handleBtnClick}>
            Submit{" "}
          </Button>
        </div>
        <List
          style={{ marginTop: "10px", width: "300px" }}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (
            <List.Item
              onClick={() => {
                this.props.handleItemDelete(index);
              }}
            >
              <Typography.Text mark></Typography.Text> {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default TodoListUI;
