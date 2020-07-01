import React, { Component } from 'react';
import { Card, Button } from 'antd';

class UserLists extends Component {
  render() {
    const { userListsData } = this.props;
    return (
      <div className="user-container container">
        {userListsData.map((data, index) => (
          <div className={'lists-card'} key={index}>
            <Card style={{ width: 300 }}>
              <h3>{data.name}</h3>
              <div className={'links'}>
                <a href={`mailto:${data.email}`}>{data.email}</a>
                <a href={`tel:${data.phone}`}>{data.phone}</a>
                <a href={data.website}>{data.website}</a>
              </div>
              <div className={'company-details'}>
                <p>{data.company.name}</p>
                <p>{data.company.catchPhrase}</p>
                <p>{data.company.bs}</p>
              </div>
              <div className={'action'}>
                <Button type={'primary'} href={`/user/${data.id}`}>
                  Details
                </Button>
              </div>
            </Card>
          </div>
        ))}
      </div>
    );
  }
}
export default UserLists;
