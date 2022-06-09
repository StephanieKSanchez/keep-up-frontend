import { Menu } from "antd";
import { PlusCircleOutlined, UserOutlined } from "@ant-design/icons";

export default function Menubar() {
  return (
    <Menu theme="dark" mode="horizontal">
      <Menu.Item
        key="add"
        icon={<PlusCircleOutlined style={{ fontSize: "1.8em" }} />}
      />
      <Menu.Item
        key="user"
        icon={<UserOutlined style={{ fontSize: "1.8em" }} />}
      />
    </Menu>
  );
}
