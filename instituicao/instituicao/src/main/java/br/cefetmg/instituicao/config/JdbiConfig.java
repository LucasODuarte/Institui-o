package br.cefetmg.instituicao.config;

import org.jdbi.v3.core.Jdbi;
import org.jdbi.v3.core.statement.SqlLogger;
import org.jdbi.v3.core.statement.StatementContext;
import org.jdbi.v3.sqlobject.SqlObjectPlugin;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import javax.sql.DataSource;
import java.time.temporal.ChronoUnit;


@Configuration
public class JdbiConfig {
    @Value( "${jdbi.showsql}" )
    private boolean showsql;
    
    Logger log = LoggerFactory.getLogger(JdbiConfig.class);
    
    @Bean
    @ConfigurationProperties("spring.datasource")
    DataSource driverManagerDataSource() {
        return new DriverManagerDataSource();
    }
    
    @Bean
    Jdbi jdbi(DataSource dataSource) {
        Jdbi jdbiRet = Jdbi.create(dataSource)
                .installPlugin(new SqlObjectPlugin());
        
        if (showsql) {
            SqlLogger sqlLogger = new SqlLogger() {
                @Override
                public void logAfterExecution(StatementContext context) {
                    log.info("jdbi.sql: {} <-> parameters {} <-> timeTaken {} ms", context.getRenderedSql(),
                            context.getBinding().toString(), context.getElapsedTime(ChronoUnit.MILLIS));
                }
            };
            jdbiRet.setSqlLogger(sqlLogger);
        }
        
        return jdbiRet;
    }
}