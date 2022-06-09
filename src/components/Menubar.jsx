import { Menu } from "antd";
import {
  HomeOutlined,
  PlusCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function Menubar() {
  let navigate = useNavigate();
  return (
    <Menu theme="dark" mode="horizontal">
      <Menu.Item
        key="add"
        onClick={() => navigate("/add")}
        icon={<PlusCircleOutlined style={{ fontSize: "1.8em" }} />}
      />
      <Menu.Item
        key="user"
        onClick={() => navigate("/login")}
        icon={<UserOutlined style={{ fontSize: "1.8em" }} />}
      />
      <Menu.Item
        key="home"
        onClick={() => navigate("/")}
        icon={<HomeOutlined style={{ fontSize: "1.8em" }} />}
      />
    </Menu>
  );
}
