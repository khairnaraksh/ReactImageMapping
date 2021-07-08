import logo from "./Assets/IndiaMAp.jpg";
import ImageMapper from "react-image-mapper";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "./App.css";
import React from "react";
{/* <area target="_blank" alt="" title="Maharashtra" href="" coords="" shape="poly">
    <area target="" alt="Madhya Pradesh" title="Madhya Pradesh" href="" coords="" shape="poly">
    <area target="" alt="Jammu Kashmir" title="Jammu Kashmir" href="" coords="" shape="poly">
    <area target="" alt="" title="Delhi" href="" coords="" shape="poly">
    <area target="" alt="" title="Punjab" href="" coords="" shape="poly">
    <area target="" alt="" title="HImachal Pradesh" href="" coords="" shape="poly">
    <area target="" alt="" title="Uttarakhand" href="" coords="" shape="poly">
    <area target="" alt="" title="Rajsthan" href="" coords="" shape="poly">
    <area target="" alt="" title="Haryana" href="" coords="" shape="poly">
    <area target="" alt="" title="Gujrat" href="" coords="" shape="poly">
    <area target="" alt="" title="Uttar Pradesh" href="" coords="" shape="poly">
    <area target="" alt="" title="GOA" href="" coords="" shape="poly">
</map> */}
const MAP = {
  name: "my-map",
  areas: [
    {
      name: "Maharashtra",
      shape: "poly",
      coords: [1054,1379,1100,1645,1144,1665,1156,1618,1316,1525,1433,1411,1544,1470,1573,1315,1375,1289,1284,1315,1159,1263,1135,1353,1095,1376],
    },
    {
      name: "Madhya Pradesh",
      shape: "poly",
      coords: [1217,1053,1252,1123,1337,1105,1366,1029,1319,994,1436,922,1500,1053,1611,1038,1698,1088,1567,1306,1386,1286,1293,1318,1153,1251],
    },
    {
      name: "Jammu Kashmir",
      shape: "poly",
      coords: [1100,297,1243,222,1377,347,1482,306,1544,347,1471,449,1468,569,1331,490,1235,560,1153,490,1156,344],
    },
    {
      name: "Delhi",
      shape: "poly",
      coords: [1333, 1824, 1380, 1800, 1416, 1860, 1368, 1883],
    },
    {
      name: "Punjab",
      shape: "poly",
      coords: [1165,700,1203,592,1267,560,1351,656,1293,729],
    },
    {
      name: "Himachal Pradesh",
      shape: "poly",
      coords: [1272,554,1337,490,1433,554,1450,627,1377,682],
    },
    {
      name: "Uttarakhand",
      shape: "poly",
      coords: [1380,682,1456,633,1579,694,1500,805,1401,744],
    },
    {
      name: "Rajsthan",
      shape: "poly",
      coords: [1150,703,1197,709,1197,741,1246,770,1284,854,1334,846,1395,924,1313,989,1354,1026,1337,1096,1264,1117,1211,1047,1168,1172,1092,1079,963,1061,885,907],
    },
    {
      name: "Haryana",
      shape: "poly",
      coords: [1203,709,1299,720,1345,656,1377,691,1354,790,1342,808,1375,828,1354,872,1340,843,1278,849,1243,764,1200,744],
    },
    {
      name: "Gujrat",
      shape: "poly",
      coords: [789,1129,826,1085,972,1070,1095,1079,1159,1172,1130,1341,1060,1365,1048,1222,1028,1315,949,1333,879,1286,832,1213,934,1190,879,1181,835,1175],
    },
    {
      name: "Uttar Pradesh",
      shape: "poly",
      coords: [1377,700,1398,744,1509,808,1724,884,1777,919,1771,968,1809,1000,1768,991,1730,1035,1745,1082,1716,1126,1692,1070,1611,1032,1503,1041,1471,965,1439,927,1404,927,1369,860,1354,790],
    },
    {
      name: "GOA",
      shape: "poly",
      coords: [1106,1659,1153,1665,1138,1723],
    }
  ],
};
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hoveredArea: null };
  }
  state = {
    open: false,
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  showDetails(area) {
    // console.log("Plot " + area.name);
    this.setState({ open: true });
    this.Area = area.name;
  }

  enterArea(area) {
    this.setState({ hoveredArea: area });
  }

  leaveArea(area) {
    this.setState({ hoveredArea: null });
  }

  getTipPosition(area) {
    return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
  }

  render() {
    const { open } = this.state;
    const Area = "";

    return (
      <div className="container">
        <ImageMapper
          src={logo}
          map={MAP}
          onClick={(area) => this.showDetails(area)}
          onMouseEnter={(area) => this.enterArea(area)}
          onMouseLeave={(area) => this.leaveArea(area)}
        />
        {/* Hovered on plot  Tooltip */}
        {this.state.hoveredArea && (
          <span
            className="tooltip"
            style={{ ...this.getTipPosition(this.state.hoveredArea) }}
          >
            {this.state.hoveredArea && this.state.hoveredArea.name}
          </span>
        )}
        {/* Modal Popup Code */}
        <div style={styles}>
          <h2>react-responsive-modal</h2>
          <Modal open={open} onClose={this.onCloseModal}>
            <h2>{this.Area} </h2>
            <p>Add {this.Area} Details here</p>
          </Modal>
        </div>
      </div>
    );
  }
}

export default App;
