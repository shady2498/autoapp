import SideNav, {
	Toggle,
	Nav,
	NavItem,
	NavIcon,
	NavText,
} from "@trendmicro/react-sidenav";
import Link from "next/link";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import React from "react";

export default function newSideBar() {
	return (
		<>
			<SideNav
				style={{ backgroundColor: "black" }}
				onSelect={(selected) => {
					// Add your code here
				}}
			>
				<SideNav.Toggle />
				<SideNav.Nav defaultSelected="home">
					<Link href="/home">
						<NavItem eventKey="home">
							<NavIcon>
								<i
									className="fa fa-fw fa-home"
									style={{ fontSize: "1.75em" }}
								/>
							</NavIcon>
							<NavText>Home</NavText>
						</NavItem>
					</Link>
					<Link href="/notifications">
						<NavItem eventKey="notifications">
							<NavIcon>
								<i
									className="fa fa-fw fa-home"
									style={{ fontSize: "1.75em" }}
								/>
							</NavIcon>
							<NavText>Notifications</NavText>
						</NavItem>
					</Link>
					<Link href="/home">
						<NavItem eventKey="/home">
							<NavIcon>
								<i
									className="fa fa-fw fa-home"
									style={{ fontSize: "1.75em" }}
								/>
							</NavIcon>
							<NavText>View All</NavText>
						</NavItem>
					</Link>
					<Link href="/account">
						<NavItem eventKey="account">
							<NavIcon>
								<i
									className="fa fa-fw fa-home"
									style={{ fontSize: "1.75em" }}
								/>
							</NavIcon>
							<NavText>Account</NavText>
						</NavItem>
					</Link>
					<Link href="/addnewdevice">
						<NavItem eventKey="addnewdevice">
							<NavIcon>
								<i
									className="fa fa-fw fa-home"
									style={{ fontSize: "1.75em" }}
								/>
							</NavIcon>
							<NavText>Add New Device</NavText>
						</NavItem>
					</Link>
				</SideNav.Nav>
			</SideNav>
			;
		</>
	);
}
