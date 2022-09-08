import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Psychologist from './img/doctor.png';
import Therapist from './img/Therapist.png';
import Lawyer from './img/Lawyer.png';
import {Box} from '@mui/material';
import "./Doctor.css"
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';



function TabPanel(props) {
  const { children, value, index, ...other } = props;





  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <>

    <div className='fssdoc01'>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', margin:'1% 2%', flexWrap: 'wrap' }}>
        <Tabs  value={value}
        onChange={handleChange}
        // variant="scrollable"
        selectionFollowsFocus 
        scrollButtons
        // allowScrollButtonsMobile
        aria-label="scrollable force tabs example">
          <Tab className='fssdoc02' label="Psychologist" {...a11yProps(0)} />
          <Tab className='fssdoc02' label="Therapist" {...a11yProps(1)} />
          <Tab className='fssdoc02' label="Psychatrist" {...a11yProps(2)} />
          <Tab className='fssdoc02' label="Lawyers" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <div className='fssdoc03'>
        <div className='fssdoc04'>
          <div className='fssdoc05'><img src={Psychologist} alt="" className='fssdoc06'/></div>
          <div className="fssdoc07">
            <div>
            <h4 className='fssdoc11'>Dr. Rachna</h4>
              <p className='fssdoc12'>Sr.Psychologist</p>
              <div className="fssdoc08">
                <Rating className='fssdoc09' name="read-only" value="4" readOnly />
                <ArrowCircleRightRoundedIcon className='fssdoc10' style={{color:'#524f84'}}/>
              </div>
            </div>
          </div>
        </div>
        
        
        <div className='fssdoc04'>
          <div className='fssdoc05'><img src={Psychologist} alt="" className='fssdoc06'/></div>
          <div className="fssdoc07">
            <div>
            <h4 className='fssdoc11'>Dr. Rachna</h4>
              <p className='fssdoc12'>Sr.Psychologist</p>
              <div className="fssdoc08">
                <Rating className='fssdoc09' name="read-only" value="3" readOnly />
                <ArrowCircleRightRoundedIcon className='fssdoc10' style={{color:'#524f84'}}/>
              </div>
            </div>
          </div>
        </div>

        <div className='fssdoc04'>
          <div className='fssdoc05'><img src={Psychologist} alt="" className='fssdoc06'/></div>
          <div className="fssdoc07">
            <div>
            <h4 className='fssdoc11'>Dr. Rachna</h4>
              <p className='fssdoc12'>Sr.Psychologist</p>
              <div className="fssdoc08">
                <Rating className='fssdoc09' name="read-only" value="4" readOnly />
                <ArrowCircleRightRoundedIcon className='fssdoc10' style={{color:'#524f84'}}/>
              </div>
            </div>
          </div>
        </div>
        
        <div className='fssdoc04'>
          <div className='fssdoc05'><img src={Psychologist} alt="" className='fssdoc06'/></div>
          <div className="fssdoc07">
            <div>
            <h4 className='fssdoc11'>Dr. Rachna</h4>
              <p className='fssdoc12'>Sr.Psychologist</p>
              <div className="fssdoc08">
                <Rating className='fssdoc09' name="read-only" value="3" readOnly />
                <ArrowCircleRightRoundedIcon className='fssdoc10' style={{color:'#524f84'}}/>
              </div>
            </div>
          </div>
        </div>
        
        <div className='fssdoc04'>
          <div className='fssdoc05'><img src={Psychologist} alt="" className='fssdoc06'/></div>
          <div className="fssdoc07">
            <div>
            <h4 className='fssdoc11'>Dr. Rachna</h4>
              <p className='fssdoc12'>Sr.Psychologist</p>
              <div className="fssdoc08">
                <Rating className='fssdoc09' name="read-only" value="3" readOnly />
                <ArrowCircleRightRoundedIcon className='fssdoc10' style={{color:'#524f84'}}/>
              </div>
            </div>
          </div>
        </div>
        
        <div className='fssdoc04'>
          <div className='fssdoc05'><img src={Psychologist} alt="" className='fssdoc06'/></div>
          <div className="fssdoc07">
            <div>
            <h4 className='fssdoc11'>Dr. Rachna</h4>
              <p className='fssdoc12'>Sr.Psychologist</p>
              <div className="fssdoc08">
                <Rating className='fssdoc09' name="read-only" value="4" readOnly />
                <ArrowCircleRightRoundedIcon className='fssdoc10' style={{color:'#524f84'}}/>
              </div>
            </div>
          </div>
        </div>
        </div>
      </TabPanel>




      <TabPanel value={value} index={1}>
      <div className='fssdoc03'>
        <div className='fssdoc04'>
          <div className='fssdoc05'><img src={Therapist} alt="" className='fssdoc06'/></div>
          <div className="fssdoc07">
            <div>
            <h4 className='fssdoc11'>Dr. Raunak</h4>
              <p className='fssdoc12'>Sr.Therapist</p>
              <div className="fssdoc08">
                <Rating className='fssdoc09' name="read-only" value="4" readOnly />
                <ArrowCircleRightRoundedIcon className='fssdoc10' style={{color:'#524f84'}}/>
              </div>
            </div>
          </div>
        </div>
        
        <div className='fssdoc04'>
          <div className='fssdoc05'><img src={Therapist} alt="" className='fssdoc06'/></div>
          <div className="fssdoc07">
            <div>
            <h4 className='fssdoc11'>Dr. Raunak</h4>
              <p className='fssdoc12'>Sr.Therapist</p>
              <div className="fssdoc08">
                <Rating className='fssdoc09' name="read-only" value="4" readOnly />
                <ArrowCircleRightRoundedIcon className='fssdoc10' style={{color:'#524f84'}}/>
              </div>
            </div>
          </div>
        </div>


      </div>
      </TabPanel>



      <TabPanel value={value} index={2}>
      <div className='fssdoc03'>
        <div className='fssdoc04'>
          <div className='fssdoc05'><img src={Therapist} alt="" className='fssdoc06'/></div>
          <div className="fssdoc07">
            <div>
            <h4 className='fssdoc11'>Dr. Ashish</h4>
              <p className='fssdoc12'>Psychatrist</p>
              <div className="fssdoc08">
                <Rating className='fssdoc09' name="read-only" value="4" readOnly />
                <ArrowCircleRightRoundedIcon className='fssdoc10' style={{color:'#524f84'}}/>
              </div>
            </div>
          </div>
        </div>
        
        <div className='fssdoc04'>
          <div className='fssdoc05'><img src={Therapist} alt="" className='fssdoc06'/></div>
          <div className="fssdoc07">
            <div>
            <h4 className='fssdoc11'>Dr. Ashish</h4>
              <p className='fssdoc12'>Psychatrist</p>
              <div className="fssdoc08">
                <Rating className='fssdoc09' name="read-only" value="4" readOnly />
                <ArrowCircleRightRoundedIcon className='fssdoc10' style={{color:'#524f84'}}/>
              </div>
            </div>
          </div>
        </div>
        
        <div className='fssdoc04'>
          <div className='fssdoc05'><img src={Therapist} alt="" className='fssdoc06'/></div>
          <div className="fssdoc07">
            <div>
            <h4 className='fssdoc11'>Dr. Ashish</h4>
              <p className='fssdoc12'>Psychatrist</p>
              <div className="fssdoc08">
                <Rating className='fssdoc09' name="read-only" value="4" readOnly />
                <ArrowCircleRightRoundedIcon className='fssdoc10' style={{color:'#524f84'}}/>
              </div>
            </div>
          </div>
        </div>

        
      </div>
      </TabPanel>



      <TabPanel value={value} index={3}>
      <div className='fssdoc03'>
        <div className='fssdoc04'>
          <div className='fssdoc05'><img src={Lawyer} alt="" className='fssdoc06'/></div>
          <div className="fssdoc07">
            <div>
            <h4 className='fssdoc11'>Raju Jaiswal</h4>
              <p className='fssdoc12'>Sr.Advocate</p>
              <div className="fssdoc08">
                <Rating className='fssdoc09' name="read-only" value="4" readOnly />
                <ArrowCircleRightRoundedIcon className='fssdoc10' style={{color:'#524f84'}}/>
              </div>
            </div>
          </div>
        </div>
        
        <div className='fssdoc04'>
          <div className='fssdoc05'><img src={Lawyer} alt="" className='fssdoc06'/></div>
          <div className="fssdoc07">
            <div>
            <h4 className='fssdoc11'>Raju Jaiswal</h4>
              <p className='fssdoc12'>Sr.Advocate</p>
              <div className="fssdoc08">
                <Rating className='fssdoc09' name="read-only" value="3" readOnly />
                <ArrowCircleRightRoundedIcon className='fssdoc10' style={{color:'#524f84'}}/>
              </div>
            </div>
          </div>
        </div>
        
        <div className='fssdoc04'>
          <div className='fssdoc05'><img src={Lawyer} alt="" className='fssdoc06'/></div>
          <div className="fssdoc07">
            <div>
            <h4 className='fssdoc11'>Raju Jaiswal</h4>
              <p className='fssdoc12'>Sr.Advocate</p>
              <div className="fssdoc08">
                <Rating className='fssdoc09' name="read-only" value="3" readOnly />
                <ArrowCircleRightRoundedIcon className='fssdoc10' style={{color:'#524f84'}}/>
              </div>
            </div>
          </div>
        </div>
        
        <div className='fssdoc04'>
          <div className='fssdoc05'><img src={Lawyer} alt="" className='fssdoc06'/></div>
          <div className="fssdoc07">
            <div>
            <h4 className='fssdoc11'>Raju Jaiswal</h4>
              <p className='fssdoc12'>Sr.Advocate</p>
              <div className="fssdoc08">
                <Rating className='fssdoc09' name="read-only" value="4" readOnly />
                <ArrowCircleRightRoundedIcon className='fssdoc10' style={{color:'#524f84'}}/>
              </div>
            </div>
          </div>
        </div>

        
      </div>
      </TabPanel>
    </Box>
    </div>
    </>
  );
}
