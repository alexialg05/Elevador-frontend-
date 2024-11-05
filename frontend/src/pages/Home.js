import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { detailsSensor } from '../actions/sensorActions';
import { useSelector } from 'react-redux';

const statsDefault = [
  {
    name: 'Revenue',
    value: '$405,091.00',
    change: '+4.75%',
    changeType: 'positive',
  },
  {
    name: 'Overdue invoices',
    value: '$12,787.00',
    change: '+54.02%',
    changeType: 'negative',
  },
  {
    name: 'Outstanding invoices',
    value: '$245,988.00',
    change: '-1.39%',
    changeType: 'positive',
  },
  {
    name: 'Expenses',
    value: '$30,156.00',
    change: '+10.18%',
    changeType: 'negative',
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Home() {
  // Vairable to display stats
  const [stats, setStats] = useState(statsDefault);

  // Variable to display fetched sensor details
  const [data, setData] = useState({});

  // Fetch sensor details, from Redux store
  const sensorDetails = useSelector((state) => state.sensorDetails);
  const { loading, error, success, sensor } = sensorDetails;

  // Dispatch sensor details
  const dispatch = useDispatch();
  // Fetch sensor details
  useEffect(() => {
    if (!success && !loading && !error) {
      dispatch(detailsSensor('sensor1'));
    }
    if (success) {
      setData(sensor);
      // ---- Update stats ----
      const newStats = [...stats]; // Copy stats
      newStats[0].name = sensor[0].name; // Update name
      newStats[0].value = sensor[0].value; // Update value
      newStats[0].change = sensor[0].unit; // Update unit
      // Assign newStats to stats
      setStats(newStats);
    }
  }, [loading, error, success, sensor, dispatch]);

  return (
    <>
      <main>
        <div className="relative isolate overflow-hidden pt-16">
          {/* Stats */}
          <div className="border-b border-b-gray-900/10 lg:border-t lg:border-t-gray-900/5">
            <dl className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:px-2 xl:px-0">
              {stats.map((stat, statIdx) => (
                <div
                  key={stat.name}
                  className={classNames(
                    statIdx % 2 === 1
                      ? 'sm:border-l'
                      : statIdx === 2
                      ? 'lg:border-l'
                      : '',
                    'flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-t border-gray-900/5 px-4 py-10 sm:px-6 lg:border-t-0 xl:px-8'
                  )}
                >
                  <dt className="text-sm/6 font-medium text-gray-500">
                    {stat.name}
                  </dt>
                  <dd
                    className={classNames(
                      stat.changeType === 'negative'
                        ? 'text-rose-600'
                        : 'text-gray-700',
                      'text-xs font-medium'
                    )}
                  >
                    {stat.change}
                  </dd>
                  <dd className="w-full flex-none text-3xl/10 font-medium tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div
            aria-hidden="true"
            className="absolute left-0 top-full -z-10 mt-96 origin-top-left translate-y-40 -rotate-90 transform-gpu opacity-20 blur-3xl sm:left-1/2 sm:-ml-96 sm:-mt-10 sm:translate-y-0 sm:rotate-0 sm:transform-gpu sm:opacity-50"
          >
            <div
              style={{
                clipPath:
                  'polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)',
              }}
              className="aspect-[1154/678] w-[72.125rem] bg-gradient-to-br from-[#FF80B5] to-[#9089FC]"
            />
          </div>
        </div>
      </main>
    </>
  );
}
